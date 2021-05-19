let servbtn1 = document.querySelector('.proposal');
let servbtn2 = document.querySelector('.breakfast');
let servbtn3 = document.querySelector('.trip');
let servbtn4 = document.querySelector('.date');
let servbtn5 = document.querySelector('.hotel');

let overlay = document.querySelector('.infopopups');

loadEventListeners();

function loadEventListeners() {

servbtn1.addEventListener('click', addPopup1);
servbtn2.addEventListener('click', addPopup2);
servbtn3.addEventListener('click', addPopup3);
servbtn4.addEventListener('click', addPopup4);
servbtn5.addEventListener('click', addPopup5);


};



//  ADD POPUP

function addPopup1(e) {

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
  heading.innerText = 'Proposal Planning';
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
  inavtab2.className = 'ptoggle';
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
  phototab.className = 'tab-photo close';
  tabs.appendChild(phototab);

  let pnav = document.createElement('nav');
  phototab.appendChild(pnav);

  let pnavcon = document.createElement('div');
  pnavcon.className = 'container';
  pnav.appendChild(pnavcon);

  let pnavtab1 = document.createElement('p');
  pnavtab1.innerText = 'INFO';
  pnavtab1.className = 'itoggle';
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
  photo1.setAttribute('src', 'img/Proposal-1.jpg');
  photocontent.appendChild(photo1);

  let photo2 = document.createElement('img');
  photo2.setAttribute('src', 'img/Proposal-1.jpg');
  photocontent.appendChild(photo2);

  let photo3 = document.createElement('img');
  photo3.setAttribute('src', 'img/Proposal-1.jpg');
  photocontent.appendChild(photo3);

  let orderbtn = document.createElement('button');
  orderbtn.className = 'btn-md-light';
  orderbtn.setAttribute("href", "#");
  orderbtn.innerText = 'Submit Order';
  containerOne.appendChild(orderbtn);

  let closetoggle = document.createElement('div');
  closetoggle.className = 'close';
  closetoggle.innerText = '+';
  containerOne.appendChild(closetoggle);

  // TAB FUNCTIONALLITY
  inavtab2.addEventListener('click', togPhotos);
  pnavtab1.addEventListener('click', togInfo);

  //CLOSE POPUP
  closetoggle.addEventListener('click', closepopup);


  overlay.appendChild(popup);

  console.log(popup);
  e.preventDefault();

}

//POPUP 2


function addPopup2(e) {

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
  heading.innerText = 'Surprise Breakfast';
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
  inavtab2.className = 'ptoggle';
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
  phototab.className = 'tab-photo close';
  tabs.appendChild(phototab);

  let pnav = document.createElement('nav');
  phototab.appendChild(pnav);

  let pnavcon = document.createElement('div');
  pnavcon.className = 'container';
  pnav.appendChild(pnavcon);

  let pnavtab1 = document.createElement('p');
  pnavtab1.innerText = 'INFO';
  pnavtab1.className = 'itoggle';
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
  photo1.setAttribute('src', 'img/Proposal-1.jpg');
  photocontent.appendChild(photo1);

  let photo2 = document.createElement('img');
  photo2.setAttribute('src', 'img/Proposal-1.jpg');
  photocontent.appendChild(photo2);

  let photo3 = document.createElement('img');
  photo3.setAttribute('src', 'img/Proposal-1.jpg');
  photocontent.appendChild(photo3);

  let orderbtn = document.createElement('a');
  orderbtn.className = 'btn-md-light';
  orderbtn.setAttribute("href", "https://form.jotform.com/solafidebyabbi/breakfastorderform");
  orderbtn.innerText = 'Submit Order';
  containerOne.appendChild(orderbtn);

  let closetoggle = document.createElement('div');
  closetoggle.className = 'close';
  closetoggle.innerText = '+';
  containerOne.appendChild(closetoggle);

  // TAB FUNCTIONALLITY
  inavtab2.addEventListener('click', togPhotos);
  pnavtab1.addEventListener('click', togInfo);

  //CLOSE POPUP
  closetoggle.addEventListener('click', closepopup);


  overlay.appendChild(popup);

  console.log(popup);
  e.preventDefault();

}

//POPUP 3


function addPopup3(e) {

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
  heading.innerText = 'Surprise Trips';
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
  inavtab2.className = 'ptoggle';
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
  phototab.className = 'tab-photo close';
  tabs.appendChild(phototab);

  let pnav = document.createElement('nav');
  phototab.appendChild(pnav);

  let pnavcon = document.createElement('div');
  pnavcon.className = 'container';
  pnav.appendChild(pnavcon);

  let pnavtab1 = document.createElement('p');
  pnavtab1.innerText = 'INFO';
  pnavtab1.className = 'itoggle';
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
  photo1.setAttribute('src', 'img/Proposal-1.jpg');
  photocontent.appendChild(photo1);

  let photo2 = document.createElement('img');
  photo2.setAttribute('src', 'img/Proposal-1.jpg');
  photocontent.appendChild(photo2);

  let photo3 = document.createElement('img');
  photo3.setAttribute('src', 'img/Proposal-1.jpg');
  photocontent.appendChild(photo3);

  let orderbtn = document.createElement('button');
  orderbtn.className = 'btn-md-light';
  orderbtn.setAttribute("href", "#");
  orderbtn.innerText = 'Submit Order';
  containerOne.appendChild(orderbtn);

  let closetoggle = document.createElement('div');
  closetoggle.className = 'close';
  closetoggle.innerText = '+';
  containerOne.appendChild(closetoggle);

  // TAB FUNCTIONALLITY
  inavtab2.addEventListener('click', togPhotos);
  pnavtab1.addEventListener('click', togInfo);

  //CLOSE POPUP
  closetoggle.addEventListener('click', closepopup);


  overlay.appendChild(popup);

  console.log(popup);
  e.preventDefault();

}


//POPUP 4


function addPopup4(e) {

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
  heading.innerText = 'Surprise Dates';
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
  inavtab2.className = 'ptoggle';
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
  phototab.className = 'tab-photo close';
  tabs.appendChild(phototab);

  let pnav = document.createElement('nav');
  phototab.appendChild(pnav);

  let pnavcon = document.createElement('div');
  pnavcon.className = 'container';
  pnav.appendChild(pnavcon);

  let pnavtab1 = document.createElement('p');
  pnavtab1.innerText = 'INFO';
  pnavtab1.className = 'itoggle';
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
  photo1.setAttribute('src', 'img/Proposal-1.jpg');
  photocontent.appendChild(photo1);

  let photo2 = document.createElement('img');
  photo2.setAttribute('src', 'img/Proposal-1.jpg');
  photocontent.appendChild(photo2);

  let photo3 = document.createElement('img');
  photo3.setAttribute('src', 'img/Proposal-1.jpg');
  photocontent.appendChild(photo3);

  let orderbtn = document.createElement('a');
  orderbtn.className = 'btn-md-light';
  orderbtn.setAttribute("href", "https://form.jotform.com/201651324671146");
  orderbtn.innerText = 'Submit Order';
  containerOne.appendChild(orderbtn);

  let closetoggle = document.createElement('div');
  closetoggle.className = 'close';
  closetoggle.innerText = '+';
  containerOne.appendChild(closetoggle);

  // TAB FUNCTIONALLITY
  inavtab2.addEventListener('click', togPhotos);
  pnavtab1.addEventListener('click', togInfo);

  //CLOSE POPUP
  closetoggle.addEventListener('click', closepopup);


  overlay.appendChild(popup);

  console.log(popup);
  e.preventDefault();

}


//POPUP 5


function addPopup5(e) {

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
  heading.innerText = 'Surprise Hotel Decor';
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
  inavtab2.className = 'ptoggle';
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
  phototab.className = 'tab-photo close';
  tabs.appendChild(phototab);

  let pnav = document.createElement('nav');
  phototab.appendChild(pnav);

  let pnavcon = document.createElement('div');
  pnavcon.className = 'container';
  pnav.appendChild(pnavcon);

  let pnavtab1 = document.createElement('p');
  pnavtab1.innerText = 'INFO';
  pnavtab1.className = 'itoggle';
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
  photo1.setAttribute('src', 'img/Proposal-1.jpg');
  photocontent.appendChild(photo1);

  let photo2 = document.createElement('img');
  photo2.setAttribute('src', 'img/Proposal-1.jpg');
  photocontent.appendChild(photo2);

  let photo3 = document.createElement('img');
  photo3.setAttribute('src', 'img/Proposal-1.jpg');
  photocontent.appendChild(photo3);

  let orderbtn = document.createElement('button');
  orderbtn.className = 'btn-md-light';
  orderbtn.setAttribute("href", "#");
  orderbtn.innerText = 'Submit Order';
  containerOne.appendChild(orderbtn);

  let closetoggle = document.createElement('div');
  closetoggle.className = 'close';
  closetoggle.innerText = '+';
  containerOne.appendChild(closetoggle);

  // TAB FUNCTIONALLITY
  inavtab2.addEventListener('click', togPhotos);
  pnavtab1.addEventListener('click', togInfo);

  //CLOSE POPUP
  closetoggle.addEventListener('click', closepopup);


  overlay.appendChild(popup);

  console.log(popup);
  e.preventDefault();

}





// Close Popup

function closepopup(e){

  overlay.className = 'infopopups';
  let popup = document.querySelector('.popup');
  popup.remove();

  console.log('close');
  e.preventDefault();
}



//TABS


function togPhotos(e){

  let phototab = document.querySelector('.tab-photo');

  phototab.className = 'tab-photo';

  let infotab = document.querySelector('.tab-info');

  infotab.className = 'tab-info close';


  console.log('toggle');
  e.preventDefault();
}

function togInfo(e){

  let phototab = document.querySelector('.tab-photo');

  phototab.className = 'tab-photo close';

  let infotab = document.querySelector('.tab-info');

  infotab.className = 'tab-info';


  console.log('toggle');
  e.preventDefault();
}