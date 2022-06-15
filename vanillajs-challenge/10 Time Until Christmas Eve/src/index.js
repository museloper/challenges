const clockTitle = document.querySelector(".js-clock");

function getTime() {
  const xmasDay = new Date("2022-12-24:00:00:00+0900");
  const currentDay = new Date();
  const utcTime =
    currentDay.getTime() + currentDay.getTimezoneOffset() * 60 * 1000;
  const koreaTime = new Date(utcTime + 9 * 60 * 60 * 1000);

  let milliSec = xmasDay.getTime() - koreaTime;

  const DAY_TO_MILLSEC = 86400000;
  const HOUR_TO_MILLISEC = 3600000;
  const MINUTE_TO_MILLISEC = 60000;
  const SEC_TO_MILLISEC = 1000;

  let days = Math.floor(milliSec / DAY_TO_MILLSEC);
  let hours = Math.floor((milliSec %= DAY_TO_MILLSEC) / HOUR_TO_MILLISEC);
  let minutes = Math.floor((milliSec %= HOUR_TO_MILLISEC) / MINUTE_TO_MILLISEC);
  let secs = Math.floor((milliSec %= MINUTE_TO_MILLISEC) / SEC_TO_MILLISEC);

  if (days < 10) {
    days = `0${days}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (secs < 10) {
    secs = `0${secs}`;
  }

  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${secs}s`;
}

function init() {
  setInterval(getTime, 1000);
}

init();
