const button = document.querySelector('button');
const colorBox = document.querySelector('.color');
const heading = document.querySelector('h1');

// Event Listener
function getname() {
  const name = document.querySelector('input').value;
  const hexCode = convertor(name);
  if (hexCode.length >= 7) {
    const orignalCode = hexCode.slice(1, 7);
    colorBox.style.backgroundColor = `#${orignalCode}`;
    heading.textContent = orignalCode;
  } else {
    colorBox.style.backgroundColor = `#${hexCode}`;
    heading.textContent = hexCode;
  }
}

function convertor(string) {
  const hexName = [];
  for (let i = 0; i < string.length; i++) {
    hexName.push(string[i].charCodeAt(0).toString(16));
  }
  const hexCode = hexName.join('');
  return hexCode;
}

// function hexconvertor(hexCode) {
//   console.log('lund');
//   const numbercode = parseInt(hexCode, 10);
//   const code = numbercode.toString(16);
//   return code;
// }
