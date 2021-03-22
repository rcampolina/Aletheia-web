export default function takeHourMinutes() {
  const takeHour = new Date();
  const minutes = takeHour.getMinutes();
  const hours = takeHour.getHours();
  const time = hours + ':' + minutes;
  return time;
}
