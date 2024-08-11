const submit = document.querySelector("#submit");
console.log("Submit ", submit);

let enterdata = true;
if (enterdata) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(enterdata);
    validtheenterdata(enterdata);
  });
}

function validtheenterdata(enterdata) {
    if (isNaN(enterdata)) {
      alert("please enter a valid name ");
    }
    // else if (enterdata = "email") {
    //     alert("please enter a email ") ;
    // }
    else {
      enterdata.push(enterdata);
      console.log("push", enterdata);
      console.log("enterdata check ", enterdata);
    }

  // Get form values
  const username = document.querySelector("#first-name").value = '';
  const lastname = document.querySelector("#last-name").value = '';
  const email = document.querySelector("#email").value = '';
  const dob = document.getElementById("dob").value = '';

  console.log(
    "Before:- \n first name",
    username,
    "last name",
    lastname,
    "email:- ",
    email,
    "dob",
    dob
  );

  // Create an object with the form data
  const newEntry = {
    fname: username,
    lname: lastname,
    email: email,
    dob: dob,
  };

  console.log("After ", newEntry);

  // Get the existing data from localStorage
  let storedData = JSON.parse(localStorage.getItem("userData")) || [];

  // Add the new entry to the array
  storedData.push(newEntry);

  // Store the updated array back in localStorage
  localStorage.setItem("userData", JSON.stringify(storedData));

  console.log("Current Stored Data: ", storedData);
}
