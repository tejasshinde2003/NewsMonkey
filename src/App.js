import './App.css';

import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
 import {
  BrowserRouter as Router,
  Switch,
  Route,
 }from "react-router-dom";



 
 
export default class App extends Component {
 
  render() {
    return (
      <div>
        <Router>
   <NavBar/> 
   <Switch>

    <Route exact path="/"><News key="general" pageSize={5} country="in" category="general"/> </Route>
     <Route exact path="/Bussiness"><News key="Bussiness" pageSize={5} country="in" category="Bussiness"/></Route>
     <Route exact path="/Entertainment"><News key="Entertainment" pageSize={5} country="in" category="Entertainment"/></Route>
     <Route exact path="/Health"><News key="Health" pageSize={5} country="in" category="Health"/></Route>
     <Route exact path="/Science"><News key="Science" pageSize={5} country="in" category="Science"/></Route>
     <Route exact path="/Sport"><News key="Sport" pageSize={5} country="in" category="Sport"/></Route>
     <Route exact path="/Technology"><News key="Technology" pageSize={5} country="in" category="Technology"/></Route>

   </Switch>
   </Router>
      </div>
    )
  }
}

 