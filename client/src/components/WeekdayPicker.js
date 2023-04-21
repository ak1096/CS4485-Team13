import React, { useState } from 'react';
import { FormControlLabel, Checkbox, FormGroup, TextField } from '@material-ui/core';

const weekdays = [
    { name: 'Monday', value: 'Monday' },
    { name: 'Tuesday', value: 'Tuesday' },
    { name: 'Wednesday', value: 'Wednesday' },
    { name: 'Thursday', value: 'Thursday' },
    { name: 'Friday', value: 'Friday' },
];

function WeekdayPicker(props) {
    const [selectedDays, setSelectedDays] = useState([]);

    const handleDayChange = (event) => {
        const { name, checked } = event.target;
        setSelectedDays((prevDays) => {
          const existingDay = prevDays.find((day) => day.day === name);
          if (checked) {
            if (existingDay) {
              return prevDays.map((day) =>
                day.day === name ? { ...day, startTime: "", endTime: "" } : day
              );
            }
            return [...prevDays, { day: name, startTime: "", endTime: "" }];
          }
          return prevDays.filter((day) => day.day !== name);
        });
        props.onSelectedDaysChanged(selectedDays);
      };
      
      

      const handleTimeChange = (event, dayName, timeType) => {
        const { value } = event.target;
        setSelectedDays((prevDays) =>
          prevDays.map((day) => {
            if (day.day === dayName) {
              return {
                ...day,
                [timeType]: value,
              };
            }
            return day;
          })
        );
        props.onSelectedDaysChanged(selectedDays);
      };
      

    const handleSave = () => {
        // selectedDays.forEach((day) => {
        //     console.log(`Day: ${day.day}, Start Time: ${day.startTime}, End Time: ${day.endTime}`);
        // });
        // const json_str = JSON.stringify(selectedDays);
        // console.log(json_str);
    };

    return (
        <FormGroup row>
            {weekdays.map((day, index) => {
                const selectedDay = selectedDays.find((d) => d.day === day.value);
                const startTime = selectedDay?.startTime || '';
                const endTime = selectedDay?.endTime || '';
                return (
                    <div key={day.value}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={!!selectedDay}
                                    onChange={handleDayChange}
                                    name={day.value}
                                    color="primary"
                                />
                            }
                            label={day.name}
                        />
                        {selectedDay && (
                            <div>
                                <div>
                                    <TextField
                                        label="Start Time"
                                        type="time"
                                        value={startTime}
                                        onChange={(event) => handleTimeChange(event, day.value, 'startTime')}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            step: 300, // 5 min
                                        }}
                                    />
                                </div>
                                <TextField
                                    label="End Time"
                                    type="time"
                                    value={endTime}
                                    onChange={(event) => handleTimeChange(event, day.value, 'endTime')}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, // 5 min
                                    }}
                                />
                            </div>
                        )}
                    </div>
                );
            })}
            <button onClick={handleSave}>Save</button>
        </FormGroup>
    );
}

export default WeekdayPicker;
