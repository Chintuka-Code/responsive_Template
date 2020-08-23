const data = [
  './assets/MSDJ.JPG',
  './assets/MSDJ3.JPG',
  './assets/MSDJ4.JPG',
  './assets/MSDJ2.JPG',
  './assets/jd&s.JPG',
  './assets/last.jpg',
  './assets/itg.jpg',
];
const section = document.querySelector('section');
const main = document.querySelector('main');
function showbar() {
  data.forEach((e) => {
    const div = document.createElement('div');
    section.appendChild(div);
    div.classList.add('outer');
    const insidediv = document.createElement('div');
    div.appendChild(insidediv);
  });
}
showbar();
let index = 0;
let int;
function call() {
  int = setInterval(() => {
    showtimeline();
    index++;
  }, 5900);
}

function showtimeline() {
  const inside = document.querySelectorAll('.outer>div');
  const maindiv = document.querySelectorAll('main>img');
  if (maindiv.length > 0) {
    main.removeChild(maindiv[0]);
  }
  if (index == inside.length) {
    clearInterval(int);
  } else {
    inside[index].classList.add('movebar');
    const div = document.createElement('img');
    div.src = data[index];
    main.appendChild(div);
  }
}
call();
