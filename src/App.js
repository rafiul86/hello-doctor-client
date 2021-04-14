import './App.css';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Schedule from './components/Schedule/Schedule';
import Blog from './components/Home/Blog/Blog';
import Appointment from './components/Home/Appointment/Appointment';
import Form from './components/Login/Form';
import SignIn from './components/Login/SignIn'
import Reset from './components/Login/Reset'
import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute';
import HeaderMain from './components/Home/Header/HeaderMain/HeaderMain';
import Dashboard from './components/Dashboard/Dashboard';
import AllPatients from './components/Dashboard/AllPatients/AllPatients';




 export const GlobalContext = createContext()
function App() {
  const [loggedInUser , setLoggedInUser] = useState({})
  return (
    <GlobalContext.Provider value={[loggedInUser , setLoggedInUser]}>
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/schedule">
          <Schedule/>
          </PrivateRoute>
          <Route path="/blog">
          <Blog/>
          </Route>
          <Route path="/appointment">
          <Appointment/>
          </Route>
          <Route path="/login">
          <Form/>
          </Route>
          <Route path="/sign">
          <SignIn/>
          </Route>
          <Route path="/reset">
          <Reset/>
          </Route>
          <Route path="/dashboard">
          <Dashboard/>
          </Route>
          <Route path="/allpatients">
          <AllPatients/>
          </Route>
        </Switch>
    </Router>
    </GlobalContext.Provider>
  );
}

export default App;
