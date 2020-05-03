/**
 * display weekday base on timeStamp
 * @param {number} timeStamp
 * @param {number} format
 */
function formatDay(timeStamp, format = { weekday: 'long' }) {
  if (new Date(timeStamp).getTime() <= 0) {
    return '';
  }

  return new Intl.DateTimeFormat([navigator.language || 'en'], format).format(
    timeStamp
  );
}

export default formatDay;
