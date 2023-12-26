function plural(date, amount) {
  if (amount === 1) {
    switch (date) {
      case 'day':
        return 'dag';
        break;
      case 'month':
        return 'maand';
        break;
      case 'year':
        return 'jaar';
        break;
    }
  } else {
    switch (date) {
      case 'day':
        return 'dagen';
        break;
      case 'month':
        return 'maanden';
        break;
      case 'year':
        return 'jaar';
        break;
    }
  }
}

const dates = [
  {
    id: 'relationship',
    countdown: countdown(new Date('2012-12-11 GMT+01:00')),
  },

  {
    id: 'gwen',
    countdown: countdown(new Date('2020-06-06 GMT+01:00')),
  },
  {
    id: 'mo',
    countdown: countdown(new Date('2020-07-15 GMT+01:00')),
  },
  {
    id: 'house',
    countdown: countdown(new Date('2018-12-18 GMT+01:00')),
  },

  {
    id: 'flip',
    countdown: countdown(new Date('2015-05-31 GMT+01:00')),
  },
];

dates.forEach((element) => {
  const elem = document.querySelector(`#${element.id}`);

  elem.querySelector('.year strong').innerHTML = element.countdown.years;
  elem.querySelector('.month strong').innerHTML = element.countdown.months;
  elem.querySelector('.day strong').innerHTML = element.countdown.days;

  elem.querySelector('.year p').innerHTML = plural('year', element.countdown.years);
  elem.querySelector('.month p').innerHTML = plural('month', element.countdown.months);
  elem.querySelector('.day p').innerHTML = plural('day', element.countdown.days);
});
