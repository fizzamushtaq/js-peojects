// Get stored data from localStorage
const name = localStorage.getItem('userName');
const email = localStorage.getItem('userEmail');
const dob = localStorage.getItem('userDOB');

// Display the data in the table
document.getElementById('displayName').textContent = name;
document.getElementById('displayEmail').textContent = email;
document.getElementById('displayDOB').textContent = dob;

// Delete data function
document.getElementById('deleteData').addEventListener('click', function() {
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userDOB');
    alert('Data Deleted');
    window.location.reload();
});
