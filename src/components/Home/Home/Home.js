import React from 'react';
import Appointment from '../Appointment/Appointment';
import Exception from '../Exception/Exception';
import Header from '../Header/Header';
import Testimonial from '../Testimonial/Testimonial';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <Exception/>
            <Appointment/>
            <Testimonial/>
        </div>
    );
};

export default Home;