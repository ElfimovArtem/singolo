const NAVIGATION = document.getElementById('NAVIGATION_LIST');
const PORTFOLIO = document.getElementById('PORTFOLIO-GALLERY');

NAVIGATION.addEventListener('click', (event) => {
  NAVIGATION.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
});

PORTFOLIO.addEventListener('click', (event) => {
  PORTFOLIO.querySelectorAll('div').forEach(el => el.classList.remove('active-item'));
  event.target.classList.add('active-item');
});
