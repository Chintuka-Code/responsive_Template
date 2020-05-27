const slide = document.querySelectorAll('.slide>img');
let index = 0;
let time = 3000;
function show() {
  slide.forEach((e) => {
    e.style.display = 'none';
  });
  slide[index].style.display = 'block';
}

function forward(value) {
  index += value;
  if (slide.length <= index) {
    index = 0;
  }
  show();
}

function backward(value) {
  index -= value;
  if (index <= 0) {
    index = slide.length - 1;
  }
  show();
}

const interval = setInterval(() => {
  forward(1);
}, time);
