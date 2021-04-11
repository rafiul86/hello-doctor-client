import React from 'react';
import Appointment from '../Appointment/Appointment';
import Exception from '../Exception/Exception';
import Header from '../Header/Header';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <Exception/>
            <Appointment/>
        </div>
    );
};

export default Home;