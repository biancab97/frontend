// Reset Password Button
document.addEventListener("DOMContentLoaded", function () {
    const resetPasswordButton = document.getElementById("resetPasswordButton");
    resetPasswordButton.addEventListener("click", function () {
      // Show the notification message when the button is clicked
      document.getElementById("notification-message").style.display = "block";
    });
  });
  