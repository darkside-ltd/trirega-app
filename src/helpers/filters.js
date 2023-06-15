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

import { formatDuration, intervalToDuration, formatDistance, format, formatDistanceToNow } from 'date-fns';

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
  console.log({date, baseDate, options})
  if(date) return formatDistance(new Date(date), new Date(baseDate), options)
  return 
}

export function formatDistanceToNowValue(date, options) {
  console.log({date, options})
  if(date) return formatDistanceToNow(new Date(date), options)
  return
}