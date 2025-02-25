export function initForm() {
  const form = document.querySelector(".form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  // Create or select the message div
  let messageDiv = document.getElementById("message");
  if (!messageDiv) {
    messageDiv = document.createElement("div");
    messageDiv.id = "message";
    messageDiv.style.marginTop = "1em";
    document.querySelector(".form-container").appendChild(messageDiv);
  }

  // Function to show messages
  const showMessage = (msg, color) => {
    messageDiv.textContent = msg;
    messageDiv.style.color = color;
  };

  // Form validation
  const validateForm = () => {
    let isValid = true;
    let errorMessages = [];

    if (usernameInput.value.trim() === "") {
      errorMessages.push("Username is required.");
      isValid = false;
    }
    if (passwordInput.value.trim() === "") {
      errorMessages.push("Password is required.");
      isValid = false;
    }
    if (!isValid) {
      showMessage(errorMessages.join(" "), "red");
    }
    return isValid;
  };

  // Submit event listener
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateForm()) {
      showMessage("Form submitted successfully!", "green");
      setTimeout(() => {
        messageDiv.textContent = "";
      }, 3000);
    }
  });

  // Username input listener
  usernameInput.addEventListener("input", function () {
    this.style.borderColor = this.value.trim().length < 3 ? "red" : "green";
  });
}
