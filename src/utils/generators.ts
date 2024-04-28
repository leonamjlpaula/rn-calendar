import {
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  subDays,
  addDays,
} from "date-fns";

const CALENDAR_LENGTH = 6 * 6;

export const generateCalendar = (date: Date) => {
  const startDate = startOfMonth(date);
  const endDate = endOfMonth(date);

  // Generate an array of dates for the month
  const daysInCalendar = eachDayOfInterval({ start: startDate, end: endDate });

  // Add two days from previous month
  for (let i = 0; i < 2; i++) {
    const d = subDays(daysInCalendar[i], i + 1);
    daysInCalendar.unshift(d);
  }

  const nextMonthsAmountOfDays = CALENDAR_LENGTH - daysInCalendar.length;

  const lastDayInMonth = daysInCalendar[daysInCalendar.length - 1];

  // Add next month days to fill calendar view
  for (let i = 0; i < nextMonthsAmountOfDays; i++) {
    const d = addDays(lastDayInMonth, i + 1);
    daysInCalendar.push(d);
  }

  return daysInCalendar;
};
