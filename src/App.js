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
 pageSize = 5;
  render() {
    return (
      <div>
        <Router>
   <NavBar/> 
   <Switch>

    <Route exact path="/"><News key="general" pageSize={this.pageSize} country="in" category="general"/> </Route>
     <Route exact path="/Bussiness"><News key="Bussiness" pageSize={this.pageSize} country="in" category="Bussiness"/></Route>
     <Route exact path="/Entertainment"><News key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment"/></Route>
     <Route exact path="/Health"><News key="Health" pageSize={this.pageSize} country="in" category="Health"/></Route>
     <Route exact path="/Science"><News key="Science" pageSize={this.pageSize} country="in" category="Science"/></Route>
     <Route exact path="/Sport"><News key="Sport" pageSize={this.pageSize} country="in" category="Sport"/></Route>
     <Route exact path="/Technology"><News key="Technology" pageSize={this.pageSize} country="in" category="Technology"/></Route>

   </Switch>
   </Router>
      </div>
    )
  }
}

 