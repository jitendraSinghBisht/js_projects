const hr = document.querySelector(".hr");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec img");

function getTime() {
  const date = new Date();
  const degSec = date.getSeconds() * 6;
  const degMin = date.getMinutes() * 6.0 + (1 / 10.0) * date.getSeconds();
  const degHr = date.getHours() * 30.0 + 0.5 * date.getMinutes();
  sec.style.transform = `rotate(${degSec}deg)`;
  min.style.transform = `rotate(${degMin}deg)`;
  hr.style.transform = `rotate(${degHr}deg)`;
}

getTime();
setInterval(getTime, 1000);
