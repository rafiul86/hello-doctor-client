import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Appointment from "../Appointment/Appointment";
import Blog from "../Blog/Blog";
import ContactForm from "../ContactForm/ContactForm";
import Exception from "../Exception/Exception";
import Header from "../Header/Header";
import Specialists from "../Specialists/Specialists";
import Testimonial from "../Testimonial/Testimonial";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <Exception />
      <Appointment />
      <Testimonial />
      <Blog />
      <Specialists />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
