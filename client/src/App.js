import './App.css';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Moviedetail from './components/Moviedetail';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route  path="/movie">
          <Moviedetail/>
        </Route>
        <Route  path="/login">
          <Login/>
        </Route>
        <Route path="/">
          <Navbar/>
          <Landingpage/>
        </Route>
      </Switch>
   
    </Router>
  );
}

export default App;
