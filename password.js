// Define the desired password requirements
const passwordRegex = /^(?=.*[A-Z])(?=.*\d{2})(?=.*[@#$%^&+=_]).{9}$/;

// Event: Login Form Submit
document.querySelector('#loginForm').addEventListener('submit', (e) => {
  e.preventDefault();

  // Get input values
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  // Validate credentials
  if (password.match(passwordRegex)) {
    // Redirect to the main finance tracker page upon successful login
    window.location.href = 'index.html';
  } else {
    // Show error message or perform other actions for invalid credentials
    alert('Invalid username or password. Please try again.');
  }

  // Clear form fields
  document.querySelector('#username').value = '';
  document.querySelector('#password').value = '';
});


