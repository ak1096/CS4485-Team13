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
    conferenceData: {
      createRequest: {
        requestId: `meet-${Date.now()}`,
        conferenceSolutionKey: {
          type: 'hangoutsMeet',
        },
      },
    },
    reminders: {
      useDefault: true,
    },
  };

  return gapi.client.calendar.events
    .insert({
      calendarId: calendarId,
      resource: event,
      conferenceDataVersion: 1, // This is required to process conference data
    })
    .then((response) => {
      console.log('Event created:', response);
    })
    .catch((error) => {
      console.error('Error creating event:', error);
    });
};
