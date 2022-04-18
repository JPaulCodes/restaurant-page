function generateHeader() {
  const header = document.createElement('header');
  const restaurantName = document.createElement('h1');

  restaurantName.innerText = 'Mozzafiato';
  header.append(restaurantName);

  return header;
}

function generateTopNav() {
  const topNav = document.createElement('nav');
  const navList = document.createElement('ul');
  const navLinks = ['Home', 'About', 'Menu', 'Contact'];

  navLinks.forEach((link) => {
    const listItem = document.createElement('li');
    const linkButton = document.createElement('button');
    linkButton.textContent = link;
    linkButton.classList.add('top-nav-link');
    listItem.append(linkButton);
    navList.append(listItem);
  });
  topNav.classList.add('top-nav');
  topNav.append(navList);

  return topNav;
}

function generateMain() {
  const main = document.createElement('main');
  main.innerText = 'Main';

  return main;
}

function generateFooter() {
  const footer = document.createElement('footer');
  footer.innerText = 'Footer';

  return footer;
}

export default function initializePage() {
  const content = document.querySelector('#content');
  const header = generateHeader();
  const main = generateMain();
  const footer = generateFooter();

  header.append(generateTopNav());
  content.append(header, main, footer);
}
