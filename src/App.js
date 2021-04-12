import './App.css';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Schedule from './components/Schedule/Schedule';



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
         <Schedule/>
        </Switch>
    </Router>
  );
}

export default App;
