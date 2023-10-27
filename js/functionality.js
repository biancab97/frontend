document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const resetPasswordButton = document.getElementById("resetPasswordButton");
  const notificationMessage = document.getElementById("notification-message");
  const successMessage = document.getElementById("success-message");
  const errorAlert = document.getElementById("error-alert");

  // Handle form submission
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // TODO: Implement your login logic here
    if (email === "your@email.com" && password === "yourpassword") {
      // If login is successful, show success message
      successMessage.style.display = "block";
      errorAlert.style.display = "none";
    } else {
      // Show an error message for incorrect login
      errorAlert.style.display = "block";
      successMessage.style.display = "none";
    }
  });

  // Handle reset password button click
  resetPasswordButton.addEventListener("click", function () {
    // TODO: Implement your reset password logic here

    // Show a notification message
    notificationMessage.style.display = "block";
  });
});
