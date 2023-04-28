import React, { useState, useEffect } from 'react';
import { gapi } from 'gapi-script';
import { useGoogleAuth } from '../components/auth';
import Calendar from '../components/GoogleCalendar';

const CalendarPage = () => {
  const { isSignedIn, handleSignIn, handleSignOut } = useGoogleAuth();
  const [calendarId, setCalendarId] = useState('');
  const [timeZone, setTimeZone] = useState('');

  useEffect(() => {
    if (isSignedIn) {
      gapi.client.calendar.calendarList
        .list()
        .then((response) => {
          const calendars = response.result.items;
          const primaryCalendar = calendars.find((calendar) => calendar.primary);
          const primaryCalendarId = primaryCalendar.id;
          setCalendarId(primaryCalendarId);
          setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
        })
        .catch((error) => {
          console.error('Error getting calendar list:', error);
        });
    }
  }, [isSignedIn]);

  return (
    <div style={{ marginTop: '10%' }}>
      {isSignedIn ? (
        <div>
          <div>user is signed in</div>
          <button onClick={handleSignOut}>Sign Out</button>
          <Calendar calendarId={calendarId} timeZone={timeZone} />
        </div>
      ) : (
        <div>
          <div>user is not signed in</div>
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
