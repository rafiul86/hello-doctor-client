import React from "react";
import { Link } from "react-router-dom";

const PatientDetails = ({ appointment }) => {
  return (
    <div>
      <div>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th className="text-secondary text-left" scope="col">
                Sr No
              </th>
              <th className="text-secondary" scope="col">
                Name
              </th>
              <th className="text-secondary" scope="col">
                Phone
              </th>
              <th className="text-secondary" scope="col">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {appointment.map((app, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{app.name}</td>
                <td>{app.phone}</td>
                <td>{app.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientDetails;
