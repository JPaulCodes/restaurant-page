import '../css/home.css';
import '../css/about.css';
import initializePage from './initialize-page';
import createAboutPage from './about';

initializePage();

const main = document.querySelector('main');
const navLinks = document.querySelectorAll('.top-nav-link');

function changePage(page) {
  switch (page) {
    case 'Home':
      main.className = 'home';
      main.replaceChildren('Homepage');
      break;
    case 'About':
      main.className = 'about';
      main.replaceChildren(...createAboutPage());
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
    changePage(link.innerText);
  });
});
