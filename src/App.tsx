import React from 'react';
// import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Home from './pages/home/index'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/sampleWebsite2">
            <Home />
          </Route>
         
        </Switch>
      </Router>
     
    </div>
  );
}
export default App;