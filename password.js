// Event: Login Form Submit
document.querySelector('#loginForm').addEventListener('submit', (e) => {
  e.preventDefault();

  // Get input values
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  // Check if the password reset form is visible
  const resetFormVisible = document.querySelector('#resetForm').style.display !== 'none';

  if (resetFormVisible) {
    // Handle password reset
    const newPassword = document.querySelector('#newPassword').value;
    const confirmPassword = document.querySelector('#confirmPassword').value;

    if (newPassword === confirmPassword && newPassword.match(passwordRegex)) {
      // Perform password reset logic
      alert('Password reset successful!');
      document.querySelector('#resetForm').style.display = 'none';
      document.querySelector('#loginForm').style.display = 'block';
    } else {
      // Show error message for invalid password reset
      alert('Invalid password reset. Please try again.');
    }

    // Clear password reset form fields
    document.querySelector('#newPassword').value = '';
    document.querySelector('#confirmPassword').value = '';
  } else {
    // Validate credentials
    if (password.match(passwordRegex)) {
      // Redirect to the main finance tracker page upon successful login
      window.location.href = 'index.html';
    } else {
      // Show error message or perform other actions for invalid credentials
      alert('Invalid username or password. Please try again.');
    }

    // Clear login form fields
    document.querySelector('#username').value = '';
    document.querySelector('#password').value = '';
  }
});

// Event: Reset Password Link Click
document.querySelector('#resetPasswordLink').addEventListener('click', (e) => {
  e.preventDefault();

  // Hide login form and show password reset form
  document.querySelector('#loginForm').style.display = 'none';
  document.querySelector('#resetForm').style.display = 'block';
});


