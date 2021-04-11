import { faClock, faMapMarkerAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { Grid, GridList } from '@material-ui/core';
import React from 'react';
import InfoCard from './InfoCard/InfoCard';

const Info = () => {
    const infoData = [
        {
            title : "Opening Hours",
        description : "24 x 7",
        icon : faClock,
        id : "1",
        background : "dark"
        },
        {
            title : "Locate Us",
        description : "Pandan Gardens 600408, West Coast Road , Singapore",
        icon : faMapMarkerAlt,
        id : "2",
        background : "primary"
        },
        {
            title : "Call Now",
        description : "+65-874-1127",
        icon : faPhoneVolume,
        id : "3",
        background : "dark"
        }
    ]
    return (
        <section >
            <Grid className="w-75 justify-content-center" container spacing={4}>
            {
                infoData.map(info =><Grid item xs={12} md={5} lg={4}> <InfoCard key={info.id} info={info}></InfoCard></Grid>)
            }
        </Grid>
        </section>
    );
};

export default Info;