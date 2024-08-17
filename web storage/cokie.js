// Function to set a cookie
function setCookie() {
    const name = document.getElementById('nameInput').value;
    const days = 7; // Cookie will expire in 7 days

    // Create a date object and set the expiry date
    const d = new Date();+
    d.setTime(d.getTime() + (days*24*60*60*1000));
    const expires = "expires=" + d.toUTCString();

    // Set the cookie with the name 'userName', value, and expiry date
    document.cookie = "userName=" + name + ";" + expires + ";path=/";
    document.getElementById('nameInput').value = ''; // Clear the input field
}

// Function to get a cookie by name
function getCookie() {
    const name = "userName=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    
    // Loop through cookies to find the one with the name 'userName'
    for(let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            document.getElementById('displayName').innerText = "Stored Name: " + cookie.substring(name.length, cookie.length);
            return;
        }
    }
    document.getElementById('displayName').innerText = "No name stored";
}

// Function to delete the cookie
function deleteCookie() {
    // Set the cookie expiry date to a past date to delete it
    document.cookie = "userName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.getElementById('displayName').innerText = "Cookie deleted";
}