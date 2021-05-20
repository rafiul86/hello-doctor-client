import { Grid } from "@material-ui/core";
import React from "react";
import ServiceData from "./ServiceData/ServiceData";
import flouride from "../../../../images/flouride.png";
import cavity from "../../../../images/cavity.png";
import whitening from "../../../../images/whitening.png";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Flouride Treatment",
      img: flouride,
      id: "1",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    },
    {
      title: "Cavity Filling",
      img: cavity,
      id: "2",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    },
    {
      title: "Teeth Whitening",
      img: whitening,
      id: "3",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing .",
    },
  ];
  return (
    <section className="justify-content-center mt-5 mb-5">
      <div className="text-center mt-5 mb-5">
        <h4 style={{ color: "blue" }}>Our Services</h4>
        <h1>Services We provide</h1>
      </div>
      <div className="mt-5 mb-5">
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} md={5} lg={4}>
              <ServiceData service={service}></ServiceData>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Services;
