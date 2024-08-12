

let tableBody = document.getElementById('userTable');


window.onload = function() {
    // Retrieve data from local storage
    let storedData = JSON.parse(localStorage.getItem("userData")) || [];

    // Get the table body where data will be displayed
    let tableBody = document.getElementById('userTable');

    // Get the current year to calculate age
    let currentYear = new Date().getFullYear();

    // Loop through each entry in the data array
    storedData.forEach((entry, index) => {
        // Skip empty entries
        if (entry.fname === '' && entry.lname === '' && entry.email === '' && entry.dob === '') {
            return;
        }

        // Calculate age from DOB
        let dobYear = new Date(entry.dob).getFullYear();
        let age = currentYear - dobYear;

        // Create a new row
        let row = document.createElement('tr');

        // Populate the row with data
        row.innerHTML = `
            <td>${entry.fname}</td>
            <td>${entry.lname}</td>
            <td>${entry.email}</td>
            <td>${age}</td>
            <td>
                <button onclick="editEntry(${index})">Edit</button>
                <button onclick="deleteEntry(${index})">Delete</button>
            </td>
        `;

        // Append the row to the table body
        tableBody.appendChild(row);
    });
}


function editEntry(index) {
    let storedData = JSON.parse(localStorage.getItem("userData"));

    // Example: Prompt to edit the first name
    let newFname = prompt("Enter new first name:", storedData[index].fname);
    if (newFname) {
        storedData[index].fname = newFname;
        localStorage.setItem('formEntries', JSON.stringify(storedData));
        location.reload(); // Reload the page to reflect changes
    }
}

function deleteEntry(index) {
    let storedData = JSON.parse(localStorage.getItem("userData"));

    // Remove the entry at the specified index
    storedData.splice(index, 1);
    localStorage.setItem('formEntries', JSON.stringify(storedData));
    location.reload(); // Reload the page to reflect changes
}



