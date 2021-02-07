const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function addZero(int) {
  return `${int < 10 ? `0${int}` : int}`;
}

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
}

function init() {
  getTime();
  setInterval(getTime, 500);
}

init();
