/**
 * display weekday base on timeStamp
 * @param {number} timeStamp
 */
function formatDay(timeStamp) {
  if (new Date(timeStamp).getTime() <= 0) {
    return '';
  }

  return new Intl.DateTimeFormat([navigator.language || 'en'], {
    weekday: 'long'
  }).format(timeStamp);
}

export default formatDay;
