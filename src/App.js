import './App.css';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Schedule from './components/Schedule/Schedule';
import Blog from './components/Home/Blog/Blog';
import Appointment from './components/Home/Appointment/Appointment';



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
        </Switch>
    </Router>
  );
}

export default App;
