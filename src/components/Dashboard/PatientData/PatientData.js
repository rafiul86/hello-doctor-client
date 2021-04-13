import React from 'react';
import PatientDetails from './PatientDetails/PatientDetails';


const PatientData = ({appointment}) => {
    return (
            <div>
                {
                    appointment.length ? <PatientDetails appointment={appointment} /> : <h3>No Data to show</h3>
                }
            </div> 
    );
};

export default PatientData;