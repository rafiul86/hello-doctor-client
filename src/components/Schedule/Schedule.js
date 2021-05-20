import React, { useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import BookAppointment from "./BookAppointment/BookAppointment";
import ScheduleMain from "./ScheduleMain/ScheduleMain";

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (data) => {
    setSelectedDate(data);
  };
  return (
    <div>
      <Navbar />
      <ScheduleMain handleDateChange={handleDateChange} />
      <BookAppointment selectedDate={selectedDate} />
      <Footer />
    </div>
  );
};

export default Schedule;
