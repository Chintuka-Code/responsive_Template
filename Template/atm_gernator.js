const cardnumber = document.querySelector('.frontAtm > p');
const cardname = document.querySelector('.bottomText>h3');
const date = document.querySelector('.bottomText>h3:last-child');
const backface = document.querySelector('.atm>.backAtm');
const cvv = document.querySelector('.backAtm>.cvv');
const form = document.querySelector('.atmForm>form');

function getInput(event) {
  const names = event.target.value;
  const attribute = event.target.attributes.data.value;

  switch (attribute) {
    case 'cvv':
      backface.classList.add('rotate');
      if (names.length == 0) {
        cvv.textContent = 'XXXX';
      } else {
        cvv.textContent = names;
      }
      break;

    case 'cardname':
      backface.classList.remove('rotate');
      if (names.length == 0) {
        cardname.textContent = 'Mr X';
      } else {
        cardname.textContent = names;
      }
      break;

    case 'cardnumber':
      backface.classList.remove('rotate');
      cardnumber.classList.add('size');
      if (names.length == 0) {
        cardnumber.textContent = 'XXXX XXXX XXXX XXXX';
        cardnumber.classList.remove('size');
      } else if (names.length == 16) {
        let text = names.match(/.{1,4}/g).join(' ');
        cardnumber.textContent = text;
        alert('Full Entry');
      } else {
        let text = names.match(/.{1,4}/g).join(' ');
        cardnumber.textContent = text;
      }
      break;

    case 'month':
      backface.classList.remove('rotate');
      if (names.length == 0) {
        date.textContent = '0000/00';
      } else {
        date.textContent = names.split('-').join('/');
      }
      break;

    default:
      console.log();
  }
}

function get() {
  backface.classList.remove('rotate');
  setTimeout(() => {
    alert('Your Credit Gernated ');
  }, 800);
}
