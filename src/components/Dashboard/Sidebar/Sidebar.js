import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div>
<div class="sidebar">
  <Link to='/prescription'>Prescription</Link>
  <Link to='/appointment'>appointment</Link>
  <Link to='/patients'>patients</Link>
  <Link to='/settings'>settings</Link>
</div>

        </div>
    );
};

export default Sidebar;