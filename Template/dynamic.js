const body = document.querySelector('table>tbody');
const data = [
  { name: 'sabban', rollno: 14, branch: 'cse' },
  { name: 'Rahul', rollno: 14, branch: 'cse' },
  { name: 'Jd', rollno: 14, branch: 'cse' },
  { name: 'Dj', rollno: 14, branch: 'cse' },
];

function getdata() {
  data.forEach((info) => {
    const tr = document.createElement('tr');
    const column1 = document.createElement('td');
    const column2 = document.createElement('td');
    const column3 = document.createElement('td');

    column1.textContent = info.name;
    column2.textContent = info.rollno;
    column3.textContent = info.branch;

    tr.appendChild(column1);
    tr.appendChild(column2);
    tr.appendChild(column3);
    body.appendChild(tr);
  });
}
