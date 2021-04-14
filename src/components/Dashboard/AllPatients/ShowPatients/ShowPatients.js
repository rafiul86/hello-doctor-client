import React from 'react';
import PatientChart from './PatientChart/PatientChart';

const ShowPatients = ({patients}) => {
    return (
        <div>
            <PatientChart patients={patients}></PatientChart>
        </div>
    );
};

export default ShowPatients;