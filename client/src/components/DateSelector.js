import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ tutor, onDayChange, isModalOpen, onDateChange }) => {
    const [selectedDay, setSelectedDay] = useState(null);
    // const [isDisabled, setIsDisabled] = useState(false);

    const availableDays = tutor.selectedDays.map(day => day.day);
    const filterDate = (date) => {
        const day = date.getDay();
        const dateString = date.toLocaleDateString("en-US", { weekday: "long" });
        const today = new Date();
        return date > today && availableDays.includes(dateString) || (day === 0 && day === 6);
    }

    const handleDayChange = (date) => {
        setSelectedDay(date);
        const dateString = date.toLocaleDateString("en-US", { weekday: "long" });
        onDayChange(dateString);
        const dateObj = new Date(date);
        const isoStr = dateObj.toISOString();
        console.log("isoStr: " + isoStr);
        onDateChange(date);
      }

    return (
        <DatePicker
            filterDate={filterDate}
            selected={selectedDay}
            onChange={handleDayChange}
            placeholderText="Pick a date"
            disabled={isModalOpen && selectedDay !== null ? true : false}
        />
    );
};

export default Calendar;