const navbar = document.querySelector('#navbar');
const navbarContent = document.querySelector('#navbarContent');
const navbarToggle = document.querySelector('#navbarToggle');
const aboutSection = document.querySelector('#about');

const toggleMenu = () => {
  navbarToggle.classList.toggle('active');
  navbarContent.classList.toggle('active');
};

const navbarSticky = () => {
  if (window.pageYOffset >= aboutSection.offsetTop) {
    navbar.classList.add('sticky');
    navbarContent.classList.remove('active');
  } else {
    navbar.classList.remove('sticky');
  }
};

navbarToggle.addEventListener('click', toggleMenu);
window.addEventListener('scroll', navbarSticky);
