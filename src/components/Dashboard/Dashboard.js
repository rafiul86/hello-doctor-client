import { Grid } from '@material-ui/core';
import PatientData from './PatientData/PatientData';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Sidebar from './Sidebar/Sidebar';


  
const Dashboard = () => {
    const [date, setDate] = useState(new Date());
   const  handleDateChange = (data)=>{

    setDate(data)
   }
    return (
        <section>
            <Grid container spacing={2}>
            <Grid  item xs={12} md={5} lg={2}>
         <Sidebar></Sidebar>
                </Grid>
            <Grid item xs={10} md={5} lg={4}>
            <Calendar
        onChange={handleDateChange}
        value={new Date()}
      />
                </Grid>
            <Grid item xs={10} md={5} lg={6}>
                <PatientData/>
                </Grid>
            </Grid>
        </section>
    );
};

export default Dashboard;