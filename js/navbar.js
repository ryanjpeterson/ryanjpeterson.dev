const navButton = document.querySelector('#nav-button');
const navContent = document.querySelector('#nav-content');
const navToggle = document.querySelector('#nav-toggle');

let navCollapsed = true;

function toggleMobileView() {
  if (window.innerWidth <= 700) {
    navCollapsed = true;
    console.log('mobile');
  } else {
    console.log('desktop');
  }
}

function toggleNavIcon() {
  if (navButton.classList.contains('fa-caret-down')) {
    navButton.classList.remove('fa-caret-down');
    navButton.classList.add('fa-caret-up');
  } else {
    navButton.classList.add('fa-caret-down');
    navButton.classList.remove('fa-caret-up');
  }
}

function toggleMenu() {
  navContent.classList.toggle('nav__mobileCollapse');
  toggleNavIcon();
}

navToggle.addEventListener('click', toggleMenu);
