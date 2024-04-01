export const formattedTime = (t?: number): string | null => {
  if (!t) return null;

  const newT = t && new Date(t * 1000);
  let formattedT = "";

  if (newT instanceof Date) {
    const hours = newT.getHours();
    const amPm = hours > 12 ? "PM" : "AM";
    const minutes = newT.getMinutes();
    formattedT = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}${amPm}`;
  }

  return formattedT;
};

export const formatDate = (d: number) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date(d * 1000);
  const monthShortName = date.toLocaleString("en-UK", { month: "short" });
  const dayDate = date.getDate();
  const dayIndex = date.getDay();

  return `${daysOfWeek[dayIndex]} ${monthShortName} ${dayDate}`;
};

// todo: formattedCurrentDateTime and formattedTime could maybe be one fn.
export const formattedCurrentDateTime = (): string | null => {
  const date = new Date();

  const monthShortName = date.toLocaleString("en-UK", { month: "short" });
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${monthShortName} ${day} ${hours}:${minutes}${
    hours > 12 ? "PM" : "AM"
  }`;
};
