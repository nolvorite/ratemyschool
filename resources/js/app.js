
import '../css/app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, {Component} from "react";
import Home from './components/Home';
import Header from "./components/Header";
import Schools from "./components/Schools";
import Review from "./components/Review";
import About from "./components/About";


class App extends Component{

  render(){
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
            </Switch>
        </Router>
    </div>
  );
  }
  
}

export default App;

