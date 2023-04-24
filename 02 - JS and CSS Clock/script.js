const second = document.querySelector(".second-hand");
const min = document.querySelector(".min-hand");
const hour = document.querySelector(".second-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const min = now.getMinutes();
  const hour = now.getHours();
  const secondsToDegress = (seconds / 60) * 360 + 90;
  second.style.transform = `rotate(${secondsToDegress}deg)`;
}

setInterval(setDate, 1000);
