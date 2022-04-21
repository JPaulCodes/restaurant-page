import bannerImage from '../img/about/about-banner.jpg';
import aboutDivider from '../img/about/about-divider.jpg';
import sectOneImg1 from '../img/about/lounge-pic.jpg';
import sectOneImg2 from '../img/about/people-eating.jpg';
import sectTwoImg1 from '../img/about/upstairs-bar.jpg';
import sectTwoImg2 from '../img/about/wine-glasses.jpg';

const sectionOneContent = [
  'section-1',
  sectOneImg1,
  sectOneImg2,
  'Get to know',
  'The finest recipes for those special moments in your life to celebrate',
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
  labore et dolore magna aliqua. In cursus turpis massa tincidu dui ut ornare. Sodales neque sodales 
  ut etiam.`,
];

const sectionTwoContent = [
  'section-2',
  sectTwoImg1,
  sectTwoImg2,
  'We offer',
  'Only the finest food and great service in our restaurant for you to enjoy',
  `Morbi non arcu risus quis. Elementum tempus donne egestas sed sed risus pretium quam vulputate. 
  Etiam sit amet nisl purus. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Sed 
  vulputate odio ut enim blandit tellus cras adipiscing.`,
];

function createPageBanner() {
  const pageBanner = document.createElement('div');
  const bannerImg = document.createElement('img');
  const smallPara = document.createElement('p');
  const header = document.createElement('h1');

  pageBanner.classList.add('page-header');
  bannerImg.src = bannerImage;
  smallPara.innerText = 'Get to know';
  header.innerText = 'About Us';

  pageBanner.append(smallPara, header, bannerImg);

  return pageBanner;
}

function createDividerImg() {
  const dividerImg = document.createElement('div');
  const img = document.createElement('img');

  dividerImg.classList.add('divider-img-1');
  img.src = aboutDivider;
  img.alt = 'A restaurant table ready for guests';

  dividerImg.append(img);

  return dividerImg;
}

function createSection(sectionClass, imgOne, imgTwo, text, paraHeader, paraText) {
  const section = document.createElement('section');
  const imgContainer = document.createElement('div');
  const leftImg = document.createElement('img');
  const rightImg = document.createElement('img');
  const textContainer = document.createElement('div');
  const smallPara = document.createElement('p');
  const header = document.createElement('h3');
  const para = document.createElement('p');

  section.classList.add(sectionClass);
  imgContainer.classList.add('img-container');
  textContainer.classList.add('text-container');
  leftImg.src = imgOne;
  rightImg.src = imgTwo;
  smallPara.textContent = text;
  header.textContent = paraHeader;
  para.textContent = paraText;

  imgContainer.append(leftImg, rightImg);
  textContainer.append(smallPara, header, para);

  if (sectionClass === 'section-1') section.append(imgContainer, textContainer);
  else section.append(textContainer, imgContainer);

  return section;
}

export default function createAboutPage() {
  const pageBanner = createPageBanner();
  const sectionOne = createSection(...sectionOneContent);
  const dividerImg = createDividerImg();
  const sectionTwo = createSection(...sectionTwoContent);

  return [pageBanner, sectionOne, dividerImg, sectionTwo];
}
