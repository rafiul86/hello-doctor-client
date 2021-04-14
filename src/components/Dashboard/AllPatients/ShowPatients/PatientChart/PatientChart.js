import { Button } from 'bootstrap';
import React, { useState } from 'react';

const PatientChart = ({patients}) => {
    const [color , setColor] = useState({
        maxHeight : "5px",
        width : "15px",
        backgroundColor : "blue",
        margin : "1px solid white",
        borderRadius : "5px",
        cursor : "pointer"
    })
    const handlePatient = () =>{
        const design2 = {
            maxHeight : "5px",
            width : "15px",
            backgroundColor : "pink",
            margin : "1px solid white",
            borderRadius : "5px",
        } 
        setColor(design2)
    }
    return (
        <div>
            <div>
            <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Department</th>
                <th className="text-secondary" scope="col">Date</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
              patients.map((patient, index) => 
                        
              <tr>
                  <td>{index + 1}</td>
                  <td>{patient.name}</td>
                  <td>{patient.service}</td>
                  <td>{patient.date}</td>
                  <td>{patient.phone}</td>
                  <td>{patient.email}</td>
                  <td onClick={handlePatient} style={color}>Pending</td>
              </tr>
              )
                }
            </tbody>
        </table>
        </div>
        </div>
    );
};

export default PatientChart;