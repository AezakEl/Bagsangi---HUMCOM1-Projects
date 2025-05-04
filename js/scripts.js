/*!
 * Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

//CONTACT FORM
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous errors
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((el) => (el.style.display = "none"));

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation flags
    let isValid = true;

    // Name validation
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required";
      document.getElementById("nameError").style.display = "block";
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
      document.getElementById("emailError").textContent =
        "Valid email is required";
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    }

    // Phone validation
    const phonePattern = /^[0-9]{11}$/;
    if (phone === "" || !phonePattern.test(phone)) {
      document.getElementById("phoneError").textContent =
        "Valid phone number is required";
      document.getElementById("phoneError").style.display = "block";
      isValid = false;
    }

    // Message validation
    if (message === "") {
      document.getElementById("messageError").textContent =
        "Message is required";
      document.getElementById("messageError").style.display = "block";
      isValid = false;
    }

    // If form is valid, you can submit it or perform any other action
    if (isValid) {
      alert("Form submitted successfully!");
      // You can also submit the form here using AJAX or similar methods
    }
  });

//SCROLL BACK TO TOP
// Get Button
let mybutton = document.getElementById("backToTop");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//SHOW ONCE SCROLL
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

//DARK MODE
function toggleDarkSections() {
  const darkSections = document.querySelectorAll(".dark-toggle");
  const darkText = document.querySelectorAll(".dark-toggle-text");
  const darkBackground = document.querySelectorAll(".dark-toggle-background");

  darkSections.forEach((section) => section.classList.toggle("dark-mode"));
  darkText.forEach((section) => section.classList.toggle("dark-mode"));
  darkBackground.forEach((section) => section.classList.toggle("dark-mode"));
}

// Apply theme on page load
function toggleDarkSections() {
  const darkSections = document.querySelectorAll(".dark-toggle");
  const darkText = document.querySelectorAll(".dark-toggle-text");
  const darkBackground = document.querySelectorAll(".dark-toggle-background");

  darkSections.forEach((section) => section.classList.toggle("dark-mode"));
  darkText.forEach((section) => section.classList.toggle("dark-mode"));
  darkBackground.forEach((section) => section.classList.toggle("dark-mode"));
}

// Initialize theme and handle button click
window.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    toggleDarkSections();
  }

  toggleBtn.addEventListener("click", () => {
    toggleDarkSections();
    const newTheme =
      localStorage.getItem("theme") === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
  });
});
