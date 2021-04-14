import React from 'react';
import { Link } from 'react-router-dom';
import PatientChart from './PatientChart/PatientChart';

const ShowPatients = ({patients}) => {
    return (
        <div>
            {
                patients.length ? <PatientChart patients={patients}></PatientChart> : <h1>No Data to Show</h1>
            }
             <Link to="/dashboard"> Back to Dashboard</Link>
        </div>
    );
};

export default ShowPatients;