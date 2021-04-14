import { Grid } from '@material-ui/core';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Statistics = () => {
    return (
        <div>
              <Grid container spacing={2}>
            <Grid  item xs={12} md={5} lg={2}>
         <Sidebar></Sidebar>
                </Grid>
            <Grid item xs={12} md={5} lg={10}>
            <h1 className="text-center">Statistics</h1>
            
                </Grid>
            </Grid>
        </div>
    );
};

export default Statistics;