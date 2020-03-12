const NAVIGATION = document.getElementById('NAVIGATION_LIST');
const MOBILE_VERTICAL_SCREEN = document.getElementById('VERTICAL_SCREEN');
const MOBILE_HORIZONTAL_SCREEN = document.getElementById('HORIZONTAL_SCREEN');
const SLIDES = document.getElementsByClassName('slider-item');
// const PORTFOLIO = document.getElementById('PORTFOLIO-GALLERY');

NAVIGATION.addEventListener('click', (event) => {
  NAVIGATION.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
});

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
// PORTFOLIO.addEventListener('click', (event) => {
//   PORTFOLIO.querySelectorAll('div').forEach(el => el.classList.remove('active-item'));
//   event.target.classList.add('active-item');
// });
