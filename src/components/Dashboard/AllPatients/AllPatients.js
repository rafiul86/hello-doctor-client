import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar'
import ShowPatients from './ShowPatients/ShowPatients';
const AllPatients = () => {
    const [patients , setPatients] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allpatients')
        .then(res =>res.json())
        .then(data => setPatients(data))
    },[])
    return (
        <section>
            <Grid container spacing={2}>
            <Grid  item xs={12} md={5} lg={2}>
         <Sidebar></Sidebar>
                </Grid>
            <Grid item xs={12} md={5} lg={10}>
            <ShowPatients patients={patients}></ShowPatients>
                </Grid>
            </Grid>
        </section>
    );
};

export default AllPatients;