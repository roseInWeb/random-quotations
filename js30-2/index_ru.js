const audio = document.querySelector('audio');
const btn = document.querySelector('.button');
const quotes = document.querySelector('.quotation')
const url = 'quotes.json';
const randomNumber = Math.round(Math.random() * 125);
const body = document.querySelector('.body');
async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(randomNumber);
  quotes.textContent = data[randomNumber].text;
}
getData();

function pageUpdate() {
  location. reload();
}
btn.addEventListener('click', pageUpdate);
