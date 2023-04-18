import React from "react";
import Iframe from "react-iframe";

function CalendarPage() {
  return (
    <Iframe
      url="https://square.site/appointments/buyer/widget/4ri8evbv33m5uo/LH6KRVHWT2WDW"
      width="100%"
      height="600px"
      id="square-appointments-widget"
      className="square-appointments-widget"
      display="initial"
      position="relative"
      allow="fullscreen"
    />
  );
}

export default CalendarPage;