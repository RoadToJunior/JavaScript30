const second = document.querySelector(".second-hand");
const minute = document.querySelector(".min-hand");
const hour = document.querySelector(".second-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsToDegress = (seconds / 60) * 360 + 90;
  second.style.transform = `rotate(${secondsToDegress}deg)`;

  const minutes = now.getMinutes();
  const minutesToDegress = (minutes / 60) * 360 + 90;
  minute.style.transform = `rotate(${minutesToDegress}deg)`;

  const hours = now.getMinutes();
  const hoursToDegress = (hours / 12) * 360 + 90;
  hour.style.transform = `rotate(${hoursToDegress}deg)`;
}

setInterval(setDate, 1000);
