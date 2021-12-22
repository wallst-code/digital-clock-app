'use strict';

function showTime() {
  const date = new Date(); //I'm unsure why this does not work unless I call object each iteration. 
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();  
  let civilianHour = hour > 12 ? hour - 12 : hour; 
  
  let adjustedMinute = minute < 10 ? `0${minute}` : `${minute}`;
  let adjustedSecond = second < 10 ? `0${second}` : `${second}`;
  let dayOrNight = hour < 12 ? 'AM' : 'PM';

  let myTime = `${civilianHour}:${adjustedMinute}:${adjustedSecond} ${dayOrNight}`;

  document.getElementById('clock').innerText = myTime;
  //make the seconds tick...I was uncertain which one would produce the correct tick - I felt the interval was 1 second slow. 
  setTimeout(showTime, 1000);
}

function showDates(){
    const date = new Date();
    const day = date.getDay();   
    const dayOfMonth = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const daysOfWeek = {
        0: 'Sunday',        
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'        
    };

    const stringDay = daysOfWeek[day];

    const monthsOfYear = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
    };

    const stringMonth = monthsOfYear[month];
    console.log(dayOfMonth);

    let daySuffix = '';

    if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31){
        daySuffix = 'st';
    } else if (dayOfMonth === 2 || dayOfMonth === 22) {
        daySuffix = 'nd';
    } else if (dayOfMonth === 3 || dayOfMonth === 23) {
        daySuffix = 'rd';
    } else {
        daySuffix = 'th';
    }  

    let myDate = `${stringDay}, ${stringMonth} ${dayOfMonth}${daySuffix} ${year}`;    

    document.getElementById('dateElements').innerText = myDate;     
}




