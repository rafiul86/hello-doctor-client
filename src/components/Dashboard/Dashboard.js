import { Grid } from "@material-ui/core";
import PatientData from "./PatientData/PatientData";
import React, { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import Sidebar from "./Sidebar/Sidebar";
import { GlobalContext } from "../../App";

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(GlobalContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointment, setAppointment] = useState([]);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  useEffect(() => {
    fetch("http://localhost:5000/appointmentsByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date: selectedDate, email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((app) => setAppointment(app));
  }, [selectedDate]);
  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2} lg={2}>
          <Sidebar></Sidebar>
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          <Calendar onChange={handleDateChange} value={new Date()} />
        </Grid>
        <Grid item xs={12} md={5} lg={6}>
          <PatientData appointment={appointment} />
        </Grid>
      </Grid>
    </section>
  );
};

export default Dashboard;
