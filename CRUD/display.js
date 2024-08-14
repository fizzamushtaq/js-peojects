let tableBody = document.getElementById('userTable');

// Custom event to trigger table update
document.addEventListener('dataUpdated', renderTable);

function addUser(newUser) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Trigger custom event
    document.dispatchEvent(new CustomEvent('dataUpdated'));
}

window.onload = function() {
    renderTable();
}

function renderTable() {
    // Clear existing table content
    tableBody.innerHTML = "";

    // Get the stored data from localStorage
    let storedData = JSON.parse(localStorage.getItem("userData")) || [];
  
    // Loop through the stored data and append rows to the table
    storedData.map((entry, index) => {
        const row = document.createElement("tr");

        // Parse the DOB and calculate the age
        const dob = new Date(entry.dob);
        const age = calculateAge(dob);

        row.innerHTML = `
            <td>${entry.fname} ${entry.lname}</td>
            <td>${entry.email}</td>
            <td>${age}</td>
            <td>
                <button onclick="editEntry(${entry.id})">Edit</button>
                <button onclick="deleteEntry(${entry.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to calculate age from DOB
function calculateAge(dob) {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    // Adjust if birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    return age;
}

function editEntry(id) {
    let storedData = JSON.parse(localStorage.getItem("userData")) || [];

    let entry = storedData.find(entry => entry.id === id);
    if (entry) {
        // Prompt the user for new values or use a form to update the entry
        entry.fname = prompt("Enter new first name:", entry.fname) || entry.fname;
        entry.lname = prompt("Enter new last name:", entry.lname) || entry.lname;
        entry.email = prompt("Enter new email:", entry.email) || entry.email;
        entry.dob = prompt("Enter new date of birth:", entry.dob) || entry.dob;

        // Store the updated array back in localStorage
        localStorage.setItem("userData", JSON.stringify(storedData));
        renderTable(); // Refresh table
    }
}

function deleteEntry(id) {
    let storedData = JSON.parse(localStorage.getItem("userData")) || [];

    // Filter out the entry with the given ID
    storedData = storedData.filter(entry => entry.id !== id);

    // Store the updated array back in localStorage
    localStorage.setItem("userData", JSON.stringify(storedData));
    renderTable(); // Refresh table
}
