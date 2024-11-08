export default function formatTimestamp(timestamp: string, outputFormat: 'default' | 'new' | 'time'): string {
  const date = new Date(timestamp);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  if (outputFormat === 'new') {
    return `${year}-${day}-${month}`;
  } else if(outputFormat == 'default') {
    // Default format: "dd - mm - yyyy"
    return `${day} - ${month} - ${year}`;
  }else{
    let hours = date.getHours();
  let minutes:(string | number) = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+ minutes : minutes;

  const strTime = hours + '.' + minutes + ampm;
  return strTime;
  }
}

