import '../css/home.css';
import '../css/about.css';
import initializePage from './initialize-page';
import loadAbout from './about';

initializePage();

const main = document.querySelector('main');
const navLinks = document.querySelectorAll('.top-nav-link');

function loadPage(page) {
  switch (page) {
    case 'Home':
      main.className = 'home';
      main.replaceChildren('Homepage');
      break;
    case 'About':
      main.className = 'about';
      main.replaceChildren(...loadAbout());
      break;
    case 'Menu':
      break;
    case 'Booking':
      break;
    case 'Contact':
      break;
    default:
  }
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    loadPage(link.innerText);
  });
});
