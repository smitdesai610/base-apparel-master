function validateEmailInput() {
    const emailInputField = document.getElementById('emailInput');
    const emailInputValue = emailInputField.value;
    const feedbackElement = document.getElementById('emailFeedback');
    const errorIcon = document.getElementById('errorIcon');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInputValue)) {
        feedbackElement.textContent = ""; // Email is valid
        emailInputField.style.borderColor = "#dbc9c9"; // Reset to normal border color
        errorIcon.classList.add("hidden"); // Hide the error icon
    } else {
        feedbackElement.textContent = "Please provide a valid email";
        emailInputField.style.borderColor = "red"; // Set red border color on invalid input
        errorIcon.classList.remove("hidden"); // Show the error icon
    }
}
