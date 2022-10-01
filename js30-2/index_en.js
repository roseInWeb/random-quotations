const audio = document.querySelector('audio');
function playAudio() {
  audio.currentTime = 0;
  audio.play();
}
const btn = document.querySelector('.button');
const quotes = document.querySelector('.quotation')
const url = 'quotation.json';
const randomNumber = Math.round(Math.random() * 125);
const body = document.querySelector('.body');
async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(randomNumber);
  quotes.textContent = data[randomNumber].text;
  playAudio();
}
getData();

function pageUpdate() {
  location. reload();
}
btn.addEventListener('click', pageUpdate);

// console.log(url.length);

// function showData(data) {
//     const img = document.querySelectorAll('img');
//     img.src = 'https://api.unsplash.com/search/photos?query=spring&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
// }

// console.log(data.urls.regular);