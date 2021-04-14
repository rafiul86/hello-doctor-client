import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div>
<div class="sidebar">
  <Link to='/prescription'>Prescription</Link>
  <Link to='/appointment'>Appointments</Link>
  <Link to='/allpatients'>Patients</Link>
  <Link to='/settings'>Settings</Link>
</div>

        </div>
    );
};

export default Sidebar;