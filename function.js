const monthEl = document.getElementById('month-name');
const dayEl = document.getElementById('day-name');
const dayNum = document.getElementById('day-number');
const yearEl = document.getElementById('year');

const date = new Date();/* from this we can get the data of date and time using this method */
/* console.log(date); */
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// const month = date.getMonth();
// const day = date.getDay();
const dayNumber = date.getDate();
const years = date.getFullYear();

monthEl.innerText = date.toLocaleString('en', {
    month:'long'
});
dayEl.innerText = date.toLocaleString('en', {
    weekday:'long'
});
dayNum.innerText =dayNumber;
yearEl.innerText = years;