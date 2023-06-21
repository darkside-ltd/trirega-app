export const formatDate = (value) => {
  const options = {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  if(!value) return
  return new Date(value).toLocaleString('en-UK', options);
};

import { formatDuration, intervalToDuration, formatDistance, format, formatDistanceToNow, formatDistanceToNowStrict } from 'date-fns';

export function fnsformatDate(value, dateFormat) {
  if(value) return format(new Date(value), dateFormat);
  return
}

export function formatDurationValue(value, formatString) {
  const duration = intervalToDuration({ start: 0, end: value });
  if(value) return formatDuration(duration, { format: formatString })
  return
}

export const formatDistanceValue = (date, baseDate, options) => {
  // console.log({date, baseDate, options})
  if(date) return formatDistance(new Date(date), new Date(baseDate), options)
  return 
}

export function formatDistanceToNowValue(date, options) {
  // console.log({date, options})
  if(date) return formatDistanceToNow(new Date(date), options)
  return
}

export function formatDistanceToNowStrictValue(date, options){
  // console.log({date, options})
  if(date) return formatDistanceToNowStrict(new Date(date), [options])
  return
}

// export function formatDurationHours(hours){
//   if(!hours) return
//   console.log({hours});
//   // const workingHours = 0.166666666667;
//   // const durationInMilliseconds = hours * 60 * 60 * 1000;

//   const humanReadableDuration = formatDuration({
//     hours: hours
//   },{
//     format: ['hours', 'minutes'],
//     zero: false,
//   });

//   console.log({humanReadableDuration});
//   return humanReadableDuration
// }

// export function formatDurationHours(hours) {
//   if (!hours) return;

//   const durationInMilliseconds = hours * 60 * 60 * 1000;

//   const humanReadableDuration = formatDuration(durationInMilliseconds, {
//     format: ['hours', 'minutes'],
//     zero: false,
//   });

//   console.log({humanReadableDuration})

//   const [formattedHours, formattedMinutes] = humanReadableDuration
//     .replace('hours', '')
//     .replace('minutes', '')
//     .trim()
//     .split(' ');

//   const formattedDuration =
//     formattedHours + (formattedHours === '1' ? ' hour' : ' hours') + ' ' + formattedMinutes + ' minutes';

//   return formattedDuration;
// }



import moment from 'moment';

export function formatDurationHours(hours) {
  if (!hours) return

  const wholeNumber = Math.floor(hours); 
  const minutes = Math.abs(hours % 1);

  // console.log({wholeNumber, minutes})

  const duration = moment.duration(hours, 'hours');
  // console.log({duration})

  let dHours = ''
  let dMins = ''
  let extraHours = 0
  if(duration.days()) extraHours = duration.days() * 24
  if(wholeNumber) dHours = `${duration.hours() + extraHours} Hour(s)`
  if(minutes) dMins = `${duration.minutes()} Minute(s)`
  const formattedDuration = dHours + ' ' + dMins;

  return formattedDuration;
}


export function formatMoney(value, locale, currency){
  // console.log({value, locale, currency})

  // if(value !== null) return
  // if(!value) return

  if(!locale) locale = "en-GB"
  if(!currency) currency = "GBP"
  const formatter =  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency, // Currency code, change it to the desired currency
  });

  return formatter.format(value);
}