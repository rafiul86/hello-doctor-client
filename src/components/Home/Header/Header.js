import React from 'react';
import HeaderMain from './HeaderMain/HeaderMain';
import './Header.css'
import Info from './Info/Info';
import Navbar from '../../Shared/Navbar/Navbar';

const Header = () => {
    return (
        <div className="design">
            <Navbar/>
            <HeaderMain></HeaderMain>
            <Info></Info>
        </div>
    );
};

export default Header;