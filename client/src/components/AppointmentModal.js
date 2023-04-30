import React from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Calendar from './DateSelector';

function AppointmentModal({ open, handleEventName, handleClose, handleDayChange, eventName, handleStartTimeChange, handleEndTimeChange, handleSubmitEvent, selectedValue, startTime, endTime, startTimeOptions, endTimeOptions, options, tutor, onDateChange, date }) {
  const backdropStyle = { backgroundColor: 'rgba(255, 255, 255, 0.8)' };
    return (
    <Modal open={open} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} onClose={handleClose} BackdropProps={{ style: backdropStyle }}>
      <div>
        <TextField label="Event Name" onChange={handleEventName} style={{flex: 1}} />
        <div>
          <FormControl>
            <Calendar tutor={tutor} onDayChange={handleDayChange} isModalOpen={open} onDateChange={onDateChange}/>
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel id="start-time-label">Start Time</InputLabel>
            <Select labelId="start-time-label" id="start-time" value={startTime} onChange={handleStartTimeChange} style={{flex: 1}}>
              {startTimeOptions.map(option => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
              ))}
            </Select>
            
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel id="end-time-label">End Time</InputLabel>
            <Select labelId="end-time-label" id="end-time" value={endTime} onChange={handleEndTimeChange} style={{flex: 1}}>
              {endTimeOptions.map(option => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <Button variant="contained" color="primary" onClick={handleSubmitEvent} style={{flex: 1}}>Submit</Button>
        </div>
      </div>
    </Modal>
  );
}

export default AppointmentModal;
