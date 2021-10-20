import '../css/app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from "react";
import Home from './components/Home';
import Header from "./components/Header";
import Schools from "./components/Schools";
import Review from "./components/Review";
import About from "./components/About";

import PennSchool from "./components/PennSchool";
import TAS from "./components/TAS";
import HIBS from "./components/HIBS";
import EIS from "./components/EIS";
import ISHCMC from "./components/ISHCMC";
import AIS from "./components/AIS";


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path='/schools'>
                <Header />
                <Schools />
              </Route>
              <Route path='/review'>
                <Header />
                <Review />
              </Route>
              <Route path='/about'>
                <Header />
                <About />
              </Route>

              <Route path='/pennschool'>
                <Header />
                <PennSchool />
              </Route>
              <Route path='/tas'>
                <Header />
                <TAS />
              </Route>
              <Route path='/hibs'>
                <Header />
                <HIBS />
              </Route>
              <Route path='/eis'>
                <Header />
                <EIS />
              </Route>
              <Route path='/ais'>
                <Header />
                <AIS />
              </Route>
              <Route path='/ishcmc'>
                <Header />
                <ISHCMC />
              </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
