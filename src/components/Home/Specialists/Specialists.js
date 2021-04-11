import { Grid } from '@material-ui/core';
import React from 'react';
import SpecialistData from './SpecialistData/SpecialistData';
import tirana from '../../../images/tirana.jpg';
import germany from '../../../images/germany.jpg';
import albania from '../../../images/albania.jpg';

const Specialists = () => {
    const doctors = [{
        name : 'Dr.Heart Analyzer',
        photo : germany,
        phone : '+97-78766-55',
        id : '1'
    },
    {
        name : 'Dr.Ever Green',
        photo : albania,
        phone : '+97-78766-55',
        id : '3'
    },
    {
        name : 'Dr.Memory Refresher',
        photo : tirana,
        phone : '+97-78766-55',
        id : '2'
    },]
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