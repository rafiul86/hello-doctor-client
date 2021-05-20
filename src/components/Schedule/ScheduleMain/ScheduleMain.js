import React from "react";
import basePanel from "../../../images/chair.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ScheduleMain = ({ handleDateChange }) => {
  return (
    <main className="row align-items-center">
      <div className="col-md-4 offset-md-2">
        <h1>Appointment Available on {}</h1>
        <Calendar onChange={handleDateChange} value={new Date()} />
      </div>
      <div className="col-md-4 mb-5 mt-5">
        <img src={basePanel} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default ScheduleMain;
