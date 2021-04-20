// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu){
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));
    document.body.style.position = 'fixed';

    //Set Menu State
    showMenu = true;
  } else{
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
    document.body.style.position = '';

    //Set Menu State
    showMenu = false;
  }
}

//Mobile Autoplay fix

// const videoElement = document.querySelectorAll(video);

// videoElement.addEventListener('suspend', () => {

// });

// videoElement.addEventListener('play', () => {

// });


const overlay = document.querySelector('.infopopups');
let servbtn = document.querySelector('.modal-btn');

loadEventListeners();

function loadEventListeners(){

  servbtn.addEventListener('click', addPopup);

}

function addPopup(e) {

  overlay.className = 'infopopups show';

  let popup = document.createElement('div');
  popup.className = 'popup';

  let containerOne = document.createElement('div');
  containerOne.className = 'container';
  popup.appendChild(containerOne);

  let headingc = document.createElement('div');
  headingc.className = 'heading';
  containerOne.appendChild(headingc);

  let heading = document.createElement('h3');
  heading.innerText = 'Default Heading';
  headingc.appendChild(heading);

  let review = document.createElement('div');
  review.className = 'reviews';
  containerOne.appendChild(review);

  let stars = document.createElement('div');
  stars.className = 'stars';
  stars.innerHTML = '<i class="fas fa-star"></i>' + '<i class="fas fa-star"></i>' + '<i class="fas fa-star"></i>' + '<i class="fas fa-star"></i>' + '<i class="fas fa-star"></i>';
  review.appendChild(stars);

  let numbers = document.createElement('div')
  numbers.className = 'numbers';
  review.appendChild(numbers);

  let rating = document.createElement('p');
  rating.innerText = '5.0';
  numbers.appendChild(rating);

  let reviews = document.createElement('span');
  reviews.innerText = '/200 Reviews';
  numbers.appendChild(reviews);

  let tabs = document.createElement('div');
  tabs.className = 'tabs';
  containerOne.appendChild(tabs);

  // Info Tabs

  let infotab = document.createElement('div');
  infotab.className = 'tab-info';
  tabs.appendChild(infotab);

  let inav = document.createElement('nav');
  infotab.appendChild(inav);

  let inavcon = document.createElement('div');
  inavcon.className = 'container';
  inav.appendChild(inavcon);

  let inavtab1 = document.createElement('p');
  inavtab1.innerText = 'INFO';
  inavcon.appendChild(inavtab1);

  let inavtab2 = document.createElement('p');
  inavtab2.innerText = 'PHOTOS';
  inavcon.appendChild(inavtab2);

  let inavdot1 = document.createElement('div');
  inavdot1.className = 'dot';
  inavcon.appendChild(inavdot1);

  let inavdot2 = document.createElement('div');
  inavdot2.className = 'dot';
  inavcon.appendChild(inavdot2);

  let infocontent = document.createElement('div');
  infocontent.className = 'text';
  infotab.appendChild(infocontent);

  let infotext = document.createElement('p');
  infotext.innerText = 'We simply want to bring the idea from our clients mind into real life all while completing the goal of a perfect surprise.We simply want to bring the idea from our clients mind into real life all while completing the goal of a perfect surprise.';
  infocontent.appendChild(infotext);

  // Tab Photo

  let phototab = document.createElement('div');
  phototab.className = 'tab-photo';
  tabs.appendChild(phototab);

  let pnav = document.createElement('nav');
  phototab.appendChild(pnav);

  let pnavcon = document.createElement('div');
  pnavcon.className = 'container';
  pnav.appendChild(pnavcon);

  let pnavtab1 = document.createElement('p');
  pnavtab1.innerText = 'INFO';
  pnavcon.appendChild(pnavtab1);

  let pnavtab2 = document.createElement('p');
  pnavtab2.innerText = 'PHOTOS';
  pnavcon.appendChild(pnavtab2);

  let pnavdot1 = document.createElement('div');
  pnavdot1.className = 'dot';
  pnavcon.appendChild(pnavdot1);

  let pnavdot2 = document.createElement('div');
  pnavdot2.className = 'dot';
  pnavcon.appendChild(pnavdot2);

  let photocontent = document.createElement('div');
  photocontent.className = 'photos';
  phototab.appendChild(photocontent);

  let photo1 = document.createElement('img');
  photo1.setAttribute('href', 'Proposal-1.jpg');
  photocontent.appendChild(photo1);

  let photo2 = document.createElement('img');
  photo2.setAttribute('href', 'Proposal-1.jpg');
  photocontent.appendChild(photo2);

  let photo3 = document.createElement('img');
  photo3.setAttribute('href', 'Proposal-1.jpg');
  photocontent.appendChild(photo3);


  





  let orderbtn = document.createElement('button');
  orderbtn.className = 'btn-md-light';
  orderbtn.setAttribute("href", "#");
  orderbtn.innerText = 'Submit Order';
  containerOne.appendChild(orderbtn);







  //overlay.appendChild(popup);

  console.log(popup);
  e.preventDefault();

}
