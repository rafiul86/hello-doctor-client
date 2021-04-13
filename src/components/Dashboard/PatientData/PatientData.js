import React from 'react';
import PatientDetails from './PatientDetails/PatientDetails';

const PatientData = ({appointment}) => {
    return (
        <div>
            {
                appointment.map(app =><PatientDetails key={app._id} app={app}></PatientDetails> )
            }
        </div>
    );
};

export default PatientData;