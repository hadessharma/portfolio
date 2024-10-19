import { initializeDropdown } from "./javascript/dropdown.js";

function toggleHamburger() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

class ExperienceSection extends HTMLElement {
  connectedCallback() {
    fetch("experience.html")
      .then((response) => response.text())
      .then((html) => {
        this.innerHTML = html;
      })
      .catch((err) => console.error("Failed to load the HTML content:", err));
  }
}

class AboutSection extends HTMLElement {
  connectedCallback() {
    fetch("about.html")
      .then((response) => response.text())
      .then((html) => {
        this.innerHTML = html;
      })
      .catch((err) => console.error("Failed to load the HTML content:", err));
  }
}

class ProjectSection extends HTMLElement {
  connectedCallback() {
    fetch("project.html")
      .then((response) => response.text())
      .then((html) => {
        this.innerHTML = html;
      })
      .catch((err) => console.error("Failed to load the HTML content:", err));
  }
}

document
  .getElementById("dark-mode-toggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    // You can also toggle on specific elements or components if needed
    document.querySelectorAll("about-section").forEach((el) => {
      el.classList.toggle("dark-mode");
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  initializeDropdown();
  // Any other initialization code can go here
});

document.addEventListener("click", function (e) {
  // Close any open dropdowns if clicking outside a dropdown
  if (!e.target.matches(".dropdown-toggle")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  } else {
    // Toggle the dropdown content of the clicked dropdown toggle
    var dropdownContent = e.target.nextElementSibling;
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  }
});

customElements.define("experience-section", ExperienceSection);
customElements.define("about-section", AboutSection);
customElements.define("project-section", ProjectSection);

// document
//   .querySelector(".details-container.color-container")
//   .addEventListener("mouseenter", function () {
//     const images = this.querySelectorAll(".slide");
//     let index = 0;

//     function nextSlide() {
//       images[index].style.opacity = 0;
//       index = (index + 1) % images.length;
//       images[index].style.opacity = 1;
//     }

//     const interval = setInterval(nextSlide, 3000);

//     this.addEventListener(
//       "mouseleave",
//       function () {
//         clearInterval(interval);
//         images.forEach((img) => (img.style.opacity = 0));
//         images[0].style.opacity = 1;
//       },
//       { once: true }
//     );
//   });
