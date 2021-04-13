import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {  useHistory, useLocation  } from "react-router-dom";
import { GlobalContext } from '../../../App'


const Navbar = () => {
  const [loggedInUser , setLoggedInUser] = useContext(GlobalContext)
      const history = useHistory()
  const handleLogout = () =>{
    const newLogger = {...loggedInUser}
    newLogger.email = ''
    setLoggedInUser(newLogger)
    history.push('/')
  }
    return (
            <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid ">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link ms-auto me-5 fs-5 fw-bolder" to='/home'>Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link ms-auto me-5 fs-5 fw-bolder" to='/schedule'>Book Appointment</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link ms-auto me-5 fs-5 fw-bolder" to='/home'>Services</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link ms-auto me-5 fs-5 fw-bolder" to='/home'>Contacts</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link ms-auto me-5 fs-5 fw-bolder" to='/blog'>Blog</Link>
        </li>
        <li className="nav-item">
        {
         loggedInUser.email ?  <Link className="nav-link ms-auto me-5 fs-5 fw-bolder" onClick={handleLogout}>Logout</Link> : <Link className="nav-link ms-auto me-5 fs-5 fw-bolder" to='/login'>Login</Link>
        }
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;