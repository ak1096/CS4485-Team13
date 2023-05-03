import { Card, CardHeader, CardContent, CardActions, Typography, Chip, Avatar } from '@material-ui/core';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@material-ui/core/IconButton';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AppointmentModal from './AppointmentModal';
import React, { useState, useEffect, useContext } from 'react';
import { gapi } from 'gapi-script';
import { useGoogleAuth } from '../components/auth';
import { createEvent } from '../components/CreateEvent';
import moment from 'moment-timezone';
import { UserContext } from '../AuthContext';
import { CREATE_APPOINTMENTS, UPDATE_FAVORITES } from '../data/apiEndpoints';

function TutorCard({ tutor }) {
  const { firstName, lastName, biography, subjects, selectedDays } = tutor;
  const { isSignedIn, handleSignIn, handleSignOut } = useGoogleAuth();
  const { favorites, setFavorites, userId } = useContext(UserContext);

  const [openModal, setOpenModal] = useState(false);
  const [eventName, setEventName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [date, setDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [startTimeOptions, setStartTimeOptions] = useState([]);
  const [endTimeOptions, setEndTimeOptions] = useState([]);
  const [calendarId, setCalendarId] = useState('');
  const [timeZone, setTimeZone] = useState('');

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

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

  const options = [
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" }
  ];
  const [selectedValue, setSelectedValue] = useState("");

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleAddToFavorites = async () => {
    if (!favorites.some((fav) => fav.firstName === firstName && fav.lastName === lastName)) {
      setFavorites([...favorites, tutor]);
    } else {
      setFavorites(favorites.filter((fav) => !(fav.firstName === firstName && fav.lastName === lastName)));
    }

    const response = await fetch(`${UPDATE_FAVORITES}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: userId,
        tutorId: tutor._id
      })
    });
    const data = await response.json();
    console.log(data);

  };
  

  const handleCloseModal = () => {
    setSelectedValue('');
    setStartTimeOptions([]);
    setEndTimeOptions([]);
    setOpenModal(false);
  };

  const getStartAndEndTimes = (selectedDay) => {
    const selectedDayObj = selectedDays.find((dayObj) => dayObj.day === selectedDay);
    if (selectedDayObj) {
      const { startTime, endTime } = selectedDayObj;
      const [startHour, startMin] = startTime.split(":");
      const [endHour, endMin] = endTime.split(":");
      for (let i = parseInt(startHour); i <= parseInt(endHour); i++) {
        for (let j = 0; j < 60; j += 30) {
          if (i === parseInt(startHour) && j < parseInt(startMin)) {
            continue;
          }
          if (i === parseInt(endHour) && j > parseInt(endMin)) {
            continue;
          }
          const timeStr = `${i.toString().padStart(2, '0')}:${j.toString().padStart(2, '0')}`;
          setStartTimeOptions(startTimeOptions => [...startTimeOptions, timeStr]);
          setEndTimeOptions(endTimeOptions =>[...endTimeOptions, timeStr]);
        }
      }
    }
  }

  const handleDayChange = (selectedDay) => {
    setSelectedValue(selectedDay);
    getStartAndEndTimes(selectedDay);
  };

  const handleSubmitEvent = async () => {
    console.log("date in createEvent: " + date);
    const newDate = date.toString();
    const dateString = newDate.replace(/ 00:00:00|\s+\(.+\)|\s+GMT[-+]\d{4}/g, '');
    const dateTimeString = `${dateString} ${startTime}`;
    const dateTime = moment.tz(dateTimeString, "ddd MMM DD YYYY HH:mm", "America/Chicago");
    const startISO = dateTime.toISOString();
    const newDateTime = moment.utc(startISO);
    const formattedDate = newDateTime.tz(timeZone).format('YYYY-MM-DDTHH:mm:ssZ').toString();
    console.log(formattedDate);

    const dateTimeString2 = `${dateString} ${endTime}`;
    const dateTime2 = moment.tz(dateTimeString2, "ddd MMM DD YYYY HH:mm", "America/Chicago");
    const endISO = dateTime2.toISOString();
    const newDateTime2 = moment.utc(endISO);
    const formattedDate2 = newDateTime2.tz(timeZone).format('YYYY-MM-DDTHH:mm:ssZ').toString();
    console.log(formattedDate2);
    
    const tutorName = `${firstName} ${lastName}`;
    try {
      const response = await fetch(`${CREATE_APPOINTMENTS}?userId=${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          startTime: dateTimeString,
          endTime: dateTimeString2,
          eventName: eventName,
          tutorName: tutorName,
          tutorID: tutor._id,
        })
      });
  
      const data = await response.json();

      if (data.message !== 'Appointment already exists') {
        createEvent(calendarId, timeZone, eventName, formattedDate, formattedDate2);
      } 
      alert(data.message);
    } catch (err) {
      console.error(err);
    }

    setSelectedValue('');
    setEventName('');
    setStartTime('');
    setEndTime('');
    setStartTimeOptions([]);
    setEndTimeOptions([]);
    setOpenModal(false);
    setDate('');
  };

  const initials = `${firstName[0]}${lastName[0]}`.toUpperCase();
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const title = `${firstName} ${lastName}`
    .split(" ")
    .map(capitalize)
    .join(" ");


  return (
    <Card style={{ maxWidth: '100%' }}>
      <CardHeader
        avatar={<Avatar>{initials}</Avatar>}
        title={title}
        subheader={`${selectedDays.map(day => `${day.day}: ${day.startTime} - ${day.endTime}`).join(', ')}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" align="left">
          {biography}
        </Typography>
      </CardContent>
      <CardActions>
        {subjects.map((subject) => (
          <Chip key={subject} label={subject.toUpperCase()} />
        ))}
      </CardActions>
      <CardActions>
        <IconButton title="Add to favorites" onClick={handleAddToFavorites}>
          <FavoriteIcon />
        </IconButton>
        <IconButton title="Book an appointment" onClick={handleOpenModal} >
          <CalendarMonthIcon />
        </IconButton>
        {isSignedIn ? (
        <div>
          <div>user is signed in</div>
          <AppointmentModal 
          open={openModal} 
          handleEventName={(e) => {setEventName(e.target.value)}}
          handleClose={handleCloseModal}
          handleDayChange={handleDayChange}
          handleStartTimeChange={(e) => {setStartTime(e.target.value)}}
          handleEndTimeChange={(e) => {setEndTime(e.target.value)}}
          handleSubmitEvent={handleSubmitEvent}
          selectedValue={selectedValue}
          startTime={startTime}
          endTime={endTime}
          startTimeOptions={startTimeOptions}
          endTimeOptions={endTimeOptions}
          options={options}
          tutor={tutor}
          date={date}
          eventName={eventName}
          onDayChange={handleDayChange}
          onDateChange={handleDateChange}
        />
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <div>user is not signed in</div>
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      )}
      </CardActions>
    </Card>
  );
}

export default TutorCard;