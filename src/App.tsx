import React from 'react';
import './App.css';
import { HomepageComponent } from './components/homepageComponent/Homepage';
import Navbar from './components/navbarComponent/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './components/aboutComponent/About';
import Services from './components/serviceComponent/ServicesComp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={About} />
          <Route exact path="/" component={HomepageComponent} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
