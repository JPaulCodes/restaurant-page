function createHeader() {
  const header = document.createElement('header');
  const topNav = document.createElement('nav');
  const navList = document.createElement('ul');
  const navLinks = ['Home', 'About', 'Menu', 'Booking', 'Contact'];

  navLinks.forEach((link) => {
    const listItem = document.createElement('li');
    const linkButton = document.createElement('button');
    linkButton.innerText = link;
    linkButton.classList.add('top-nav-link');
    listItem.append(linkButton);
    navList.append(listItem);
  });

  topNav.classList.add('top-nav');
  topNav.append(navList);
  header.append(topNav);

  return header;
}

function createMain() {
  const main = document.createElement('main');

  return main;
}

function createFooter() {
  const footer = document.createElement('footer');

  return footer;
}

export default function initializePage() {
  const content = document.querySelector('#content');
  content.append(createHeader(), createMain(), createFooter());
}
