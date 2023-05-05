import React, { useState, useEffect } from 'react';
import { gapi } from 'gapi-script';
import { useGoogleAuth } from '../components/auth';
import Calendar from '../components/GoogleCalendar';
import GoogleButton from 'react-google-button';

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
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <GoogleButton type="light" label='Sign Out with Google' onClick={handleSignOut} />
          </div>
          <div style={{marginBottom: '1%'}}/>
          <Calendar calendarId={calendarId} timeZone={timeZone} />
        </div>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <GoogleButton type="light" onClick={handleSignIn} />
        </div>
      )}
    </div>
  );
  
};

export default CalendarPage;
