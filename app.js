"use strict";

window.onload = () => {
  setInterval(showTime, 500);
  showDates();
};

const addLeadingZero = (num) => (num < 10 ? `0${num}` : `${num}`);

function showTime() {
  const date = new Date();
  const hour = date.getHours();
  const minute = addLeadingZero(date.getMinutes());
  const second = addLeadingZero(date.getSeconds());
  let civilianHour = hour > 12 ? hour - 12 : hour;

  let dayOrNight = hour < 12 ? "AM" : "PM";

  const myTime = document.getElementById("clock");
  myTime.textContent = `${civilianHour}:${minute}:${second} ${dayOrNight}`;
}

function showDates() {
  const dateObj = new Date();
  const day = dateObj.getDay();
  const date = displayDateSuffix(dateObj.getDate());
  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();

  const daysOfWeek = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };

  const stringDay = daysOfWeek[day];

  const monthsOfYear = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  const stringMonth = monthsOfYear[month];

  const myDate = document.getElementById("date-elements");
  myDate.textContent = `${stringDay}, ${stringMonth} ${date} ${year}`;
}

function displayDateSuffix(date) {
  if (date % 10 === 1) return `${date}st`;
  if (date % 10 === 2) return `${date}nd`;
  if (date % 10 === 3) return `${date}rd`;
  return `${date}th`;
}
