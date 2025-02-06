document.addEventListener("DOMContentLoaded", () => {
  // Grab elements from the DOM
  const form = document.querySelector(".form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  // Create (or select) a message div to show feedback
  let messageDiv = document.getElementById("message");
  if (!messageDiv) {
    messageDiv = document.createElement("div");
    messageDiv.id = "message";
    messageDiv.style.marginTop = "1em";
    document.querySelector(".form-container").appendChild(messageDiv);
  }

  // Select buttons using class selectors
  const submitBtn = document.querySelector(".form__button--submit");
  const resetBtn = document.querySelector(".form__button--reset");

  // Helper function to display a message with a specific color
  const showMessage = (msg, color) => {
    messageDiv.textContent = msg;
    messageDiv.style.color = color;
  };

  // Validate form fields; returns true if all fields are valid
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

  // Handle form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateForm()) {
      showMessage("Form submitted successfully!", "green");
      // Clear the success message after 3 seconds
      setTimeout(() => {
        messageDiv.textContent = "";
      }, 3000);
      // Additional actions (e.g., sending data to a server) can go here.
    }
  });

  // Real-time validation for username length
  usernameInput.addEventListener("input", function () {
    this.style.borderColor = this.value.trim().length < 3 ? "red" : "green";
  });

  // Function to change the background theme and update button colors by updating CSS variables
  const changeBackgroundTheme = () => {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const color3 = getRandomColor();

    // Update the CSS custom properties so that the background gradient (and its animation) uses the new colors.
    document.documentElement.style.setProperty("--primary-color", color1);
    document.documentElement.style.setProperty("--accent-color", color2);
    document.documentElement.style.setProperty("--secondary-color", color3);

    // Update both buttons to use the first random color for a matching look
    submitBtn.style.backgroundColor = color1;
    resetBtn.style.backgroundColor = color1;
  };

  // Change background theme on reset button click
  resetBtn.addEventListener("click", changeBackgroundTheme);

  // Also change background theme on double-clicking the body
  document.body.addEventListener("dblclick", changeBackgroundTheme);

  // Helper function to generate a random hex color
  function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  }

  // Helper to add a hover effect to a button element
  const addHoverEffect = (button) => {
    button.addEventListener("mouseover", () => {
      button.style.transform = "scale(1.05)";
    });
    button.addEventListener("mouseout", () => {
      button.style.transform = "scale(1)";
    });
  };

  // Add hover effects to both buttons
  [submitBtn, resetBtn].forEach(addHoverEffect);
});
