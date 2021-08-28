document.querySelector('.proposal').addEventListener('click', e => {
  //Values
  const heading = 'Proposal Planning',
    starnumber = '<i class="fas fa-star" aria-hidden="true"></i>' + '<i class="fas fa-star" aria-hidden="true"></i>' + '<i class="fas fa-star" aria-hidden="true"></i>' + '<i class="fas fa-star" aria-hidden="true"></i>' + '<i class="fas fa-star" aria-hidden="true"></i>',
    rating = '5.0',
    reviews = '200',
    text = 'We simply want to bring the idea from our clients mind into real life all while completing the goal of a perfect surprise.We simply want to bring the idea from our clients mind into real life all while completing the goal of a perfect surprise.',
    img1src = 'img/Proposal-1.jpg',
    img2src = 'img/Proposal-1.jpg',
    img3src = 'img/Proposal-1.jpg',
    btnlink = '#';

  // Instantiate book
  const popup = new Popup(heading, starnumber, rating, reviews, text, img1src, img2src, img3src, btnlink);

  // Instantiate UI
  const ui = new UI();

  ui.addPopUpToUI(popup);
  console.log(popup);

  e.preventDefault();
});

document.querySelector('.breakfast').addEventListener('click', e => {
  //Values
  const heading = 'Surprise Breakfast',
    starnumber = '<i class="fas fa-star" aria-hidden="true"></i>' + '<i class="fas fa-star" aria-hidden="true"></i>' + '<i class="fas fa-star" aria-hidden="true"></i>' + '<i class="fas fa-star" aria-hidden="true"></i>' + '<i class="fas fa-star" aria-hidden="true"></i>',
    rating = '5.0',
    reviews = '200',
    text = 'We simply want to bring the idea from our clients mind into real life all while completing the goal of a perfect surprise.We simply want to bring the idea from our clients mind into real life all while completing the goal of a perfect surprise.',
    img1src = 'img/Proposal-1.jpg',
    img2src = 'img/Proposal-1.jpg',
    img3src = 'img/Proposal-1.jpg',
    btnlink = '#';

  // Instantiate book
  const popup = new Popup(heading, starnumber, rating, reviews, text, img1src, img2src, img3src, btnlink);

  // Instantiate UI
  const ui = new UI();

  ui.addPopUpToUI(popup);
  console.log(popup);

  e.preventDefault();
});

document.querySelector('.trip').addEventListener('click', e => {
  //Values
  const heading = 'Surprise Trips',
    starnumber = '<i class="fas fa-star" aria-hidden="true"></i>' + '<i class="fas fa-star" aria-hidden="true"></i>' + '<i class="fas fa-star" aria-hidden="true"></i>' + '<i class="fas fa-star" aria-hidden="true"></i>' + '<i class="fas fa-star" aria-hidden="true"></i>',
    rating = '5.0',
    reviews = '200',
    text = 'We simply want to bring the idea from our clients mind into real life all while completing the goal of a perfect surprise.We simply want to bring the idea from our clients mind into real life all while completing the goal of a perfect surprise.',
    img1src = 'img/Proposal-1.jpg',
    img2src = 'img/Proposal-1.jpg',
    img3src = 'img/Proposal-1.jpg',
    btnlink = '#';


  // Instantiate book
  const popup = new Popup(heading, starnumber, rating, reviews, text, img1src, img2src, img3src, btnlink);

  // Instantiate UI
  const ui = new UI();

  ui.addPopUpToUI(popup);
  console.log(popup);

  e.preventDefault();
});

document.querySelector('.date').addEventListener('click', e => {
  //Values
  const heading = 'Surprise Datess',
    starnumber = '<i class="fas fa-star" aria-hidden="true"></i>' + '<i class="fas fa-star" aria-hidden="true"></i>' + '<i class="fas fa-star" aria-hidden="true"></i>' + '<i class="fas fa-star" aria-hidden="true"></i>' + '<i class="fas fa-star" aria-hidden="true"></i>',
    rating = '5.0',
    reviews = '200',
    text = 'We simply want to bring the idea from our clients mind into real life all while completing the goal of a perfect surprise.We simply want to bring the idea from our clients mind into real life all while completing the goal of a perfect surprise.',
    img1src = 'img/Proposal-1.jpg',
    img2src = 'img/Proposal-1.jpg',
    img3src = 'img/Proposal-1.jpg',
    btnlink = '#';


  // Instantiate book
  const popup = new Popup(heading, starnumber, rating, reviews, text, img1src, img2src, img3src, btnlink);

  // Instantiate UI
  const ui = new UI();

  ui.addPopUpToUI(popup);
  console.log(popup);

  e.preventDefault();
});

document.querySelector('.hotel').addEventListener('click', e => {
  //Values
  const heading = 'Surprise Hotel Decor',
    starnumber = '<i class="fas fa-star" aria-hidden="true"></i>' + '<i class="fas fa-star" aria-hidden="true"></i>' + '<i class="fas fa-star" aria-hidden="true"></i>' + '<i class="fas fa-star" aria-hidden="true"></i>' + '<i class="fas fa-star" aria-hidden="true"></i>',
    rating = '5.0',
    reviews = '200',
    text = 'We simply want to bring the idea from our clients mind into real life all while completing the goal of a perfect surprise.We simply want to bring the idea from our clients mind into real life all while completing the goal of a perfect surprise.',
    img1src = 'img/Proposal-1.jpg',
    img2src = 'img/Proposal-1.jpg',
    img3src = 'img/Proposal-1.jpg',
    btnlink = '#';


  // Instantiate book
  const popup = new Popup(heading, starnumber, rating, reviews, text, img1src, img2src, img3src, btnlink);

  // Instantiate UI
  const ui = new UI();

  ui.addPopUpToUI(popup);
  console.log(popup);

  e.preventDefault();
});

document.querySelector('.infopopups').addEventListener('click', e => {
  const ui = new UI();

  ui.deletePopup(e.target);

  e.preventDefault();
});

document.querySelector('.infopopups').addEventListener('click', e => {
  const ui = new UI();

  ui.tabSwitch(e.target);

  e.preventDefault();
});