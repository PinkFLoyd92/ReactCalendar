const moment = require('moment-timezone');

const tz = moment.tz.guess();
/**
 * @param {int} The month number, 0 based
 * @param {int} The year, not zero based, required to account for leap years
 * @return {Date[]} List with date objects for each day of the month
 */
const getDaysInMonth = (month, year) => {
  let iteration = 0;
  const date = new Date(Date.UTC(year, month, 1));
  const days = [];
  while (date.getUTCMonth() === month) {
    if (iteration === 0) {
      const weekDay = date.getDay();
      if (weekDay !== 0) {
        for (let i = 0; i < weekDay; i++) {
          const lastDate = new Date(date);
          lastDate.setDate(lastDate.getDate() - weekDay + i);
          days.push(lastDate);
        }
      }
    }
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
    iteration++;
  }

  iteration = 0;
  while (days.length < 35) {
    date.setDate(date.getDate() + iteration);
    days.push(new Date(date));
    iteration++;
  }
  return days;
};

const formatDate = (date) => {
  const d = new Date(date);


  let month = `${d.getUTCMonth() + 1}`;


  let day = `${d.getUTCDate()}`;


  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
};

export {
  getDaysInMonth,
  formatDate
};
