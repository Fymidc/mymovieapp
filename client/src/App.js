import './App.css';
import React,{useEffect} from 'react'
import {connect} from 'react-redux';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Moviedetail from './components/Moviedetail';
import Afterlogin from './components/Afterlogin';
import Login from './components/Login';
import { fetchUser,fetchMovie} from './actions';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App(props) {

  useEffect(()=>{
    props.fetchMovie()
    props.fetchUser()       
},[])

  return (
    <Router>
      <Switch>
      <Route  path="/user">
          <Afterlogin/>
        </Route>
      <Route  path="/movie">
          <Moviedetail/>
        </Route>
        <Route  path="/login">
          <Login/>
        </Route>
        <Route exact path="/">
          <Navbar/>
          <Landingpage/>
        </Route>
      </Switch>
   
    </Router>
  );
}

const mapStateToProps=state=>{
  return{
      auth:state.auth
      
  }
}


export default connect(mapStateToProps, {fetchUser,fetchMovie})(App);
