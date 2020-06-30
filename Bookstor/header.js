const header = document.querySelector('header');
const hambarger = document.querySelector('.hambarger');
const navbar = document.querySelector('nav');
window.addEventListener('scroll', (e) => {
  window.scrollY > 40
    ? header.classList.add('sticky')
    : header.classList.remove('sticky');
});

hambarger.addEventListener('click', () => {
  navbar.classList.toggle('showbar');
});
