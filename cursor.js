const section = document.querySelector('section');
const div = document.querySelector('div');
section.addEventListener('mousemove', (e) => {
  div.style.top = e.pageY + 'px';
  div.style.left = e.pageX + 'px';
});
