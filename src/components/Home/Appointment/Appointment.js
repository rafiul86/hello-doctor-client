import { Grid } from "@material-ui/core";
import React from "react";
import doctor from "../../../images/doctor.png";
import "./Appointment.css";

const Appointment = () => {
  return (
    <section className="appointment-container mt-5">
      <div className="d-flex align-items-center">
        <div className="col-md-5">
          <img className="img-fluid " id="img-style" src={doctor} alt="" />
        </div>
        <div className="col-md-5 text-white">
          <h5>Appointment</h5>
          <h1>Make an Appointment</h1>
          <p>
            Lorem ipsum dolor,sit amet consectetur adipisicing elit. Beatae
            quaerat dolores ipsum itaque aliquid sit amet consectetur
            adipisicing elit. Beatae quaerat dolores ipsum itaque aliquid est!
          </p>
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
