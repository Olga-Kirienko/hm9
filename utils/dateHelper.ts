export function getFormattedDate() {
  const today = new Date();
  const day = today.getDate();
  const formattedDay = day.toString().padStart(2, '0');
  const month = today.getMonth();
  const formattedMonth = (month + 1).toString().padStart(2, '0');
  const year = today.getFullYear();
  return `${formattedDay}-${formattedMonth}-${year}`;
}
