import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import SpecialistData from './SpecialistData/SpecialistData';


const Specialists = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/showDoctor')
        .then(res => res.json())
        .then(data =>setDoctors(data))
    },[])
    return (
        <section className="offset-md-2 mb-5 align-items-center justify-content-center mt-5">
            <h1 style={{color : "blue"}} className="mt-5">Our Specialists </h1>
            <Grid className=" offset-md-1 ms-5 mt-5" container spacing={1}>
                {
                    doctors.map(doctor =><Grid item xs={10} md={5} lg={4}> <SpecialistData doctor={doctor}></SpecialistData></Grid>)
                }
            </Grid>
        </section>
    );
};

export default Specialists;