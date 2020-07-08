const button = document.querySelector('button');
const box = document.querySelectorAll('.box');
const cupon = document.querySelector('.cupon');
function remove(event) {
  const div = event.target;
  div.style.backgroundColor = 'transparent';
  button.classList.add('show');
  cupon.removeChild(div);
}

function removeall() {
  box.forEach((e) => {
    e.style.backgroundColor = 'transparent';
    cupon.removeChild(e);
  });
}
