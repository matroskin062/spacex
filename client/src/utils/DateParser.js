export const parseDate = (dateString) => {
  const date = new Date(dateString);
  return `${('0' + date.getUTCDate()).substr(-2)}.${(
    '0' +
    (date.getUTCMonth() + 1)
  ).substr(-2)}.${date.getFullYear()} ${('0' + date.getUTCHours()).substr(
    -2
  )}:${('0' + date.getUTCMinutes()).substr(-2)}:${(
    '0' + date.getUTCSeconds()
  ).substr(-2)}`;
};
