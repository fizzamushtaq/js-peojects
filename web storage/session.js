// Function to save the name in session storage
function saveName() {
    // Get the value from the input field
    const name = document.getElementById('nameInput').value;

    // Save the value in session storage with the key 'userName'
    sessionStorage.setItem('userName', name);

    // Clear the input field
    document.getElementById('nameInput').value = '';
}

// Function to display the stored name
function displayStoredName() {
    // Retrieve the value from session storage
    const storedName = sessionStorage.getItem('userName');

    // Display the stored name on the page
    document.getElementById('displayName').innerText = storedName ? `Stored Name: ${storedName}` : 'No name stored';
}
