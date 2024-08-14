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
            <td contenteditable="false">${entry.fname} ${entry.lname}</td>
            
            <td contenteditable="false">${entry.email}</td>
            <td>${age}</td>
            <td>
                <button onclick="editEntry(${entry.id}, this)">Edit</button>
                <button onclick="saveEntry(${entry.id}, this)">Save</button>
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

function editEntry(id, button) {
    // Get the row containing the clicked button
    let row = button.parentElement.parentElement;
    let cells = row.querySelectorAll('td');

    // Make the cells editable
    cells[0].setAttribute('contenteditable', 'true');
    cells[1].setAttribute('contenteditable', 'true');
    cells[2].setAttribute('contenteditable', 'true');
}

function saveEntry(id, button) {
    // Get the row containing the clicked button
    let row = button.parentElement.parentElement;
    let cells = row.querySelectorAll('td');

    // Get the updated values
    let updatedFname = cells[0].innerText;
    let updatedLname = cells[1].innerText;
    let updatedEmail = cells[2].innerText;

    // Show confirmation alert
    let confirmSave = confirm('Data updated successfully! Do you want to save the changes?');

    if (confirmSave) {
        // Update the localStorage with the new values
        let storedData = JSON.parse(localStorage.getItem("userData")) || [];
        let entry = storedData.find(entry => entry.id === id);
        if (entry) {
            entry.fname = updatedFname;
            entry.lname = updatedLname;
            entry.email = updatedEmail;
        }

        localStorage.setItem("userData", JSON.stringify(storedData));

        // Re-render the table and make the cells non-editable
        renderTable();
    } else {
        // Revert to non-editable cells without saving changes
        renderTable();
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
