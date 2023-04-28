import { gapi } from 'gapi-script';

export const createEvent = (calendarId, timeZone, eventName, startISO, endISO) => {
  const event = {
    summary: eventName,
    description: 'This is a test event',
    start: {
      dateTime: startISO,
      timeZone: timeZone,
    },
    end: {
      dateTime: endISO,
      timeZone: timeZone,
    },
    // attendees: [
    //   {
    //     email: attendeeEmail,
    //   },
    // ],
    reminders: {
      useDefault: true,
    },
  };

  return gapi.client.calendar.events
    .insert({
      calendarId: calendarId,
      resource: event,
    })
    .then((response) => {
      console.log('Event created:', response);
    })
    .catch((error) => {
      console.error('Error creating event:', error);
    });
};
