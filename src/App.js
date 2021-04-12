import './App.css';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Schedule from './components/Schedule/Schedule';
import Blog from './components/Home/Blog/Blog';
import Appointment from './components/Home/Appointment/Appointment';
import Form from './components/Login/Form';
import SignIn from './components/Login/SignIn'
import Reset from './components/Login/Reset'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/schedule">
          <Schedule/>
          </Route>
          <Route path="/blog">
          <Blog/>
          </Route>
          <Route path="/appointment">
          <Appointment/>
          </Route>
          <Route path="/form">
          <Form/>
          </Route>
          <Route path="/sign">
          <SignIn/>
          </Route>
          <Route path="/reset">
          <Reset/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
