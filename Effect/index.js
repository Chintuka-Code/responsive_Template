const logo = document.querySelector('.logo');
const nav = document.querySelector('nav');
const ul = document.querySelectorAll('nav>ul>li');

// Event Listener

logo.addEventListener('click', showlist);

ul.forEach((li) => {
  li.addEventListener('click', check);
});

function showlist() {
  nav.classList.toggle('shownav');
}

function check() {
  console.log('hello');
}
