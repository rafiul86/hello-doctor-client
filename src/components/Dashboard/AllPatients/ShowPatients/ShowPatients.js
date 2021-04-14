import React from 'react';
import PatientChart from './PatientChart/PatientChart';

const ShowPatients = ({patients}) => {
    return (
        <div>
            {
                patients.length ? <PatientChart patients={patients}></PatientChart> : <h1>No Data to Show</h1>
            }
        </div>
    );
};

export default ShowPatients;