const second = document.querySelector(".second-hand");
const min = document.querySelector(".min-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const min = now.ge;
  const secondsToDegress = (seconds / 60) * 360 + 90;
  second.style.transform = `rotate(${secondsToDegress}deg)`;
}

setInterval(setDate, 1000);
