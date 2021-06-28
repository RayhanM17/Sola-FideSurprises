// POPUP  JS


class Popup {
  constructor(heading, starnumber, rating, reviews, text, img1src, img2src, img3src, btnlink) {
    this.heading = heading;
    this.starnumber = starnumber;
    this.rating = rating;
    this.reviews = reviews;
    this.text = text;
    this.img1src = img1src;
    this.img2src = img2src;
    this.img3src = img3src;
    this.btnlink = btnlink;
  }
}

class UI {

  addPopUpToUI(popup) {
    let overlay = document.querySelector('.infopopups');
    overlay.className = 'infopopups show';

    let popUp = document.createElement('div');
    popUp.className = 'popup';

    let containerOne = document.createElement('div');
    containerOne.className = 'container';
    popUp.appendChild(containerOne);

    let headingc = document.createElement('div');
    headingc.className = 'heading';
    headingc.innerHTML = `<h3>${popup.heading}</h3>`;
    containerOne.appendChild(headingc);

    let review = document.createElement('div');
    review.className = 'reviews';
    containerOne.appendChild(review);

    let stars = document.createElement('div');
    stars.className = 'stars';
    stars.innerHTML = popup.starnumber;
    review.appendChild(stars);

    let numbers = document.createElement('div')
    numbers.className = 'numbers';
    numbers.innerHTML = `<p>${popup.rating}</p> <span>/${popup.reviews} Reviews</span>`;
    review.appendChild(numbers);

    let tabs = document.createElement('div');
    tabs.className = 'tabs';
    containerOne.appendChild(tabs);

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
    infocontent.innerHTML = `
      <p>${popup.text}</p>
    `
    infotab.appendChild(infocontent);

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
    photocontent.innerHTML = `
      <img src="${popup.img1src}">
      <img src="${popup.img2src}">
      <img src="${popup.img3src}">
    `
    phototab.appendChild(photocontent);

    let orderbtn = document.createElement('button');
    orderbtn.className = 'btn-md-light';
    orderbtn.setAttribute("href", `${popup.btnlink}`);
    orderbtn.innerText = 'Submit Order';
    containerOne.appendChild(orderbtn);

    let closetoggle = document.createElement('div');
    closetoggle.className = 'delete';
    closetoggle.innerText = '+';
    containerOne.appendChild(closetoggle);

    overlay.appendChild(popUp);
  }

  deletePopup(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
      document.querySelector('.infopopups').classList.remove('show');
    }
  }

  tabSwitch(target) {
    if (target.className === 'ptoggle' ) {
      target.parentElement.parentElement.parentElement.classList.add('close');
      document.querySelector('.tab-photo').classList.remove('close');
    }
    if (target.className === 'itoggle' ) {
      target.parentElement.parentElement.parentElement.classList.add('close');
      document.querySelector('.tab-info').classList.remove('close');
    }
  }

}