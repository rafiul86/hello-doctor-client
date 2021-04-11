import React from 'react';
import Exception from '../Exception/Exception';
import Header from '../Header/Header';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <Exception/>
        </div>
    );
};

export default Home;