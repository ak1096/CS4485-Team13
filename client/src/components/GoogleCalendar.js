import React from 'react';

const Calendar = ({ calendarId, timeZone }) => {
  return (
    <iframe
      src={`https://calendar.google.com/calendar/embed?src=${calendarId}&ctz=${timeZone}`}
      style={{ border: 1 }}
      width="800"
      height="600"
    ></iframe>
  );
};

export default Calendar;
