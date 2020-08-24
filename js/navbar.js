const navbarToggle = document.getElementById("navbar-toggle");
const navbarContents = document.getElementById("navbar-contents");
const navbarItem = document.querySelectorAll(".navbar-item");

let navbarCollapsed = false;
let userCollapsedNavbar = true;

function toggleNavbar() {
  if (navbarContents.classList.contains("navbar-contents-collapse")) {
    navbarContents.classList.remove("navbar-contents-collapse");
    navbarToggle.textContent = "Hide Menu";
  } else {
    navbarContents.classList.add("navbar-contents-collapse");
    navbarToggle.textContent = "Show Menu";
  }

  userCollapsedNavbar = !userCollapsedNavbar;
}

function displayMenu(e) {
  // Always show menu 800px wide or above
  if (navbarContents.classList.contains("navbar-contents-collapse")) {
    if (e.target.innerWidth > 800) {
      navbarContents.classList.remove("navbar-contents-collapse");
    }
  }

  // Contidionally show menu 799px wide or below
  if (e.target.innerWidth <= 800) {
    if (userCollapsedNavbar) {
      navbarContents.classList.add("navbar-contents-collapse");
    } else {
      navbarContents.classList.remove("navbar-contents-collapse");
    }
  }
}

navbarToggle.addEventListener("click", toggleNavbar);
window.addEventListener("resize", displayMenu);
