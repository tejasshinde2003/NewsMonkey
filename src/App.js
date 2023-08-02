import './App.css';

import React, { useState} from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
 import {BrowserRouter as Router, Switch, Route,}from "react-router-dom/cjs/react-router-dom.min";
 import LoadingBar from 'react-top-loading-bar'



 
 
 const App =()=> {
  const pageSize = 5;
 
 const [progress,setProgress]= useState(0)
 
 
  
    return (
      <div>
        <Router>
   <NavBar/> 
   <LoadingBar
   height={5}
        color='#f11946'
        progress={progress}
      
      />
   <Switch>

    <Route exact path="/"><News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/> </Route>
     <Route exact path="/Bussiness"><News setProgress={setProgress} key="Bussiness" pageSize={pageSize} country="in" category="Bussiness"/></Route>
     <Route exact path="/Entertainment"><News setProgress={setProgress} key="Entertainment" pageSize={pageSize} country="in" category="Entertainment"/></Route>
     <Route exact path="/Health"><News setProgress={setProgress} key="Health" pageSize={pageSize} country="in" category="Health"/></Route>
     <Route exact path="/Science"><News setProgress={setProgress} key="Science" pageSize={pageSize} country="in" category="Science"/></Route>
     <Route exact path="/Sport"><News setProgress={setProgress} key="Sport" pageSize={pageSize} country="in" category="Sport"/></Route>
     <Route exact path="/Technology"><News setProgress={setProgress} key="Technology" pageSize={pageSize} country="in" category="Technology"/></Route>

   </Switch>
   </Router>
      </div>
    )
   
}

 export default App;