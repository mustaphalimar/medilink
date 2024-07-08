export function formatDate(dateString: string) {
  const date = new Date(dateString);

  // Options for formatting the date
  const options = {
    weekday: "long", // "Friday"
    year: "numeric", // "2024"
    month: "short", // "Sept"
    day: "numeric",
    hour: "numeric", // "08"
    minute: "numeric", // "23"
    hour12: true, // Use 12-hour time format
  };

  // Format the date using toLocaleString with the specified options
  const formattedDate = date.toLocaleString("en-US", options);

  return formattedDate;
}
