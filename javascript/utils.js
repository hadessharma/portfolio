function toggleHamburger() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleDescription(id) {
  const description = document.getElementById(id);
  if (description.style.display === "none") {
    description.style.display = "block";
    description.style.opacity = "1";
    description.style.visibility = "visible";
  } else {
    description.style.display = "none";
    description.style.opacity = "0";
    description.style.visibility = "hidden";
  }
}
