import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = () => {
    return (
<div class="sidebar">
  <Link to='/prescriptions'>Prescription</Link>
  <Link to='/statistics'>Patients Management</Link>
  <Link to='/allpatients'>Patients</Link>
  <Link to='/admin'>Admin Panel</Link>
</div>
    );
};

export default Sidebar;