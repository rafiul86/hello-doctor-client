import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../../App';
import './Sidebar.css'


const Sidebar = () => {
  const [loggedInUser , setLoggedInUser] = useContext(GlobalContext)
    const [admin, setAdmin] = useState(false)
    useEffect(()=>{
        fetch('http://localhost:5000/admin',{
          method : "POST",
          headers : {'content-type' : 'application/json'},
          body : JSON.stringify({email : loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setAdmin(data))
    },[])
    console.log(loggedInUser.email , admin)
    return (
<div class="sidebar">
<div>
<Link to='/dashboard'>Dashboard</Link>
</div>
{admin &&<div>
  <Link to='/prescriptions'>Prescription</Link>
  <Link to='/statistics'>Patients Management</Link>
  <Link to='/allpatients'>Patients</Link>
  <Link to='/admin'>Admin Panel</Link>
  </div>
}
  </div>
    );
};

export default Sidebar;