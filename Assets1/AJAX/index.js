const button = document.getElementById('button');
const button1 = document.getElementById('button1');
button.addEventListener('click', gettext);
button1.addEventListener('click', getapi);
// async function gettext() {
//   try {
//     const getdata = await fetch('sample.txt');
//     const data = await getdata.text();
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   }
// }
async function gettext() {
  try {
    const response = await fetch('user.json');
    const data = await response.json();
    data.forEach((name) => {
      console.log(name.name);
    });
  } catch (e) {
    console.log(e);
  }
}

async function getapi() {
  try {
    const url = ' https://api.github.com/users';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
