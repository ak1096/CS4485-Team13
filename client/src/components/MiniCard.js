import React, { useContext, useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { UpcomingList } from '../data/Tutors';
import { UserContext } from '../AuthContext';

export default function MiniCard() {
  const [appointments, setAppointments] = useState([]);
  const { userId, userType } = useContext(UserContext);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch(`http://localhost:8080/auth/get-appointments?userId=${userId}&userType=${userType}`);
        const data = await response.json();
        setAppointments(data);
        console.log('appointments: ' + data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAppointments();
  }, []);

  return (
    <>
      {appointments.length > 0 ? (
        <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
          {appointments.map((appointment, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>{appointment.tutorName.charAt(0).toUpperCase() +
      appointment.tutorName.charAt(1).toUpperCase()}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={appointment.startTime + " - " + appointment.endTime}
                secondary={appointment.eventName + ": " + appointment.tutorName}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <p>No appointments found.</p>
      )}
    </>
  );
  
}