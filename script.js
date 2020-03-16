const NAVIGATION = document.getElementById('NAVIGATION_LIST');
const MOBILE_VERTICAL_SCREEN = document.getElementById('VERTICAL_SCREEN');
const MOBILE_HORIZONTAL_SCREEN = document.getElementById('HORIZONTAL_SCREEN');
const SLIDES = document.getElementsByClassName('slider-item');
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');
const PORTFOLIO_TABS = document.getElementById('PORTFOLIO-TABS');
const FILTER_TABS = document.querySelectorAll('.portfolio__navigation-item');
const PORTFOLIO = document.getElementById('PORTFOLIO-GALLERY');

NAVIGATION.addEventListener('click', (event) => {
  NAVIGATION.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
});

//------------------------------------

MOBILE_VERTICAL_SCREEN.addEventListener('click', (event) => {
  MOBILE_VERTICAL_SCREEN.querySelectorAll('img').forEach(el => {
    if (el.classList.contains('active-screen')) {
      el.classList.remove('active-screen');
      event.target.classList.add('not-active-screen');
    } else if (el.classList.contains('not-active-screen')) {
      el.classList.remove('not-active-screen');
      event.target.classList.add('active-screen');
    }
  });
});
MOBILE_HORIZONTAL_SCREEN.addEventListener('click', (event) => {
  MOBILE_HORIZONTAL_SCREEN.querySelectorAll('img').forEach(el => {
    if (el.classList.contains('active-screen')) {
      el.classList.remove('active-screen');
      event.target.classList.add('not-active-screen');
    } else if (el.classList.contains('not-active-screen')) {
      el.classList.remove('not-active-screen');
      event.target.classList.add('active-screen');
    }
  });
});

/*Slider*/

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides(slideIndex += 1);
}

function minusSlide() {
  showSlides(slideIndex -= 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if (n > SLIDES.length) slideIndex = 1;
  if (n < 1) slideIndex = SLIDES.length;
  for (let i = 0; i < SLIDES.length; i++) {
    SLIDES[i].style.display = "none";
  }
  SLIDES[slideIndex - 1].style.display = "block";
}

/*Form on "Get a quote"*/

BUTTON.addEventListener('click', () => {
  const subject = document.getElementById('subject').value.toString();
  const description = document.getElementById('descript').value.toString();

  if (subject) {
    document.getElementById('result').innerText = subject;
    document.getElementById('message-text').style.display = "block";
    document.getElementById('message-text-is-absent').style.display = "none";
  } else if (!subject) {
      document.getElementById('message-text').style.display = "none";
      document.getElementById('message-text-is-absent').style.display = "block";
  }

  if (description) {
    document.getElementById('description-text').innerText = description;
    document.getElementById('message-description').style.display = "block";
    document.getElementById('message-description-is-absent').style.display = "none";
  } else if (!description) {
      document.getElementById('message-description').style.display = "none";
      document.getElementById('message-description-is-absent').style.display = "block";
  }
  document.getElementById('message-block').classList.remove('hidden');
});

CLOSE_BUTTON.addEventListener('click', () => {
  document.getElementById('message-block').classList.add('hidden');
  document.querySelector('form').reset();
});

//------------------------------------

PORTFOLIO_TABS.addEventListener('click', (event) => {
  PORTFOLIO_TABS.querySelectorAll('li').forEach(el => el.classList.remove('active-tab'));
  event.target.classList.add('active-tab');
});

//------------------------------------

for (let filterTab of FILTER_TABS) {
  filterTab.addEventListener('click', shuflePortfolio)
}

function shuflePortfolio(event) {
  if (event.target.classList.contains('active-item')) return;
  const portfolioImages = document.getElementById('PORTFOLIO-GALLERY');

  let shuffledPortfolioImages = document.createElement('div');
  shuffledPortfolioImages.className = 'portfolio__gallery';
  shuffledPortfolioImages.id = 'PORTFOLIO-GALLERY';

  const portfel = Array.from(
    portfolioImages.querySelectorAll('.portfolio__gallery-item')
  );

  for (let i = portfel.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    const temp = portfel[j];
    portfel[j] = portfel[i];
    portfel[i] = temp
  }
  for (let item of portfel) {
    shuffledPortfolioImages.append(item)
  }

  portfolioImages.replaceWith(shuffledPortfolioImages)
}

//------------------------------------

PORTFOLIO.addEventListener('click', (event) => {
  PORTFOLIO.querySelectorAll('.border-screen').forEach(el => el.classList.remove('active-item'));
  event.target.classList.add('active-item');
});

