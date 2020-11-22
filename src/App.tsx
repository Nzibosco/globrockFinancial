import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomepageComponent } from './components/homepageComponent/Homepage';
import Navbar from './components/navbarComponent/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path = "/" component = {HomepageComponent}/>

      </Switch>
    </Router>
    </>
  );
}

export default App;
