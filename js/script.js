document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Reset error messages
    document.getElementById('username-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    document.getElementById('confirm-password-error').textContent = '';

    // Perform input validation
    let isValid = true;

    if (!username) {
        document.getElementById('username-error').textContent = 'Username is required';
        isValid = false;
    }

    if (!email) {
        document.getElementById('email-error').textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('email-error').textContent = 'Invalid email format';
        isValid = false;
    }

    if (!password) {
        document.getElementById('password-error').textContent = 'Password is required';
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = 'Passwords do not match';
        isValid = false;
    }

    if (isValid) {
        alert('Registration successful');
        // Add logic to handle the registration, e.g., sending data to the server
    }
});

function isValidEmail(email) {
    // A simple email validation function
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
