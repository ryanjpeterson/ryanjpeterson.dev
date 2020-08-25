const navbarToggle = document.getElementById("navbar-toggle");
const navbarContents = document.getElementById("navbar-contents");

let navbarCollapse = true;

function toggleNavbar() {
  if (navbarCollapse) {
    navbarToggle.textContent = "Hide Menu";
  } else {
    navbarToggle.textContent = "Show Menu";
  }

  navbarContents.classList.toggle("navbar-contents-collapse");
  navbarCollapse = !navbarCollapse;
}

function showMenu() {
  if (window.innerWidth >= 800) {
    if (navbarContents.classList.contains("navbar-contents-collapse")) {
      navbarContents.classList.remove("navbar-contents-collapse");
    }
  }

  if (window.innerWidth <= 799) {
    if (!navbarCollapse) {
      navbarContents.classList.remove("navbar-contents-collapse");
    } else {
      navbarContents.classList.add("navbar-contents-collapse");
    }
  }
}

showMenu();

navbarToggle.addEventListener("click", toggleNavbar);
window.addEventListener("resize", showMenu);
