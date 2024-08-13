const submit = document.querySelector("#submit");

if (submit) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    validtheenterdata();
  });
}

function validtheenterdata() {
  // Get form values
  const username = document.querySelector("#first-name").value;
  const lastname = document.querySelector("#last-name").value;
  const email = document.querySelector("#email").value;
  const dob = document.getElementById("dob").value;
  
  // Check if fields are empty or contain only spaces
  if (!username.trim() || !lastname.trim() || !email.trim() || !dob.trim()) {
    alert("Please fill all fields correctly.");
    return;
  }

  // Create an object with the form data
  const newEntry = {
    id: Date.now(),
    fname: username,
    lname: lastname,
    email: email,
    dob: dob,
  };

  // Get the existing data from localStorage
  let storedData = JSON.parse(localStorage.getItem("userData")) || [];

  // Add the new entry to the array
  storedData.push(newEntry);

  // Store the updated array back in localStorage
  localStorage.setItem("userData", JSON.stringify(storedData));

  // Clear the form fields
  document.querySelector("#first-name").value = '';
  document.querySelector("#last-name").value = '';
  document.querySelector("#email").value = '';
  document.getElementById("dob").value = '';

  console.log("Current Stored Data: ", storedData);
}
