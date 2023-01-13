export const formatData = (data: string) => {
  const dateObj = new Date(data);
  const day = dateObj.toLocaleDateString('en-US', {day: 'numeric'});
  const month = dateObj.toLocaleDateString('en-US', {month: 'short'});
  const year = dateObj.toLocaleDateString('en-US', {year: 'numeric'});
  return `${month} ${day}th, ${year}` ;
};