import React from 'react';
import HeaderMain from './HeaderMain/HeaderMain';
import Navbar from './Navbar/Navbar';
import './Header.css'
import Info from './Info/Info';

const Header = () => {
    return (
        <div className="design">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <Info></Info>
        </div>
    );
};

export default Header;