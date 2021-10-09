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
          <Route exact path="/">
            <Home />
          </Route>
         
        </Switch>
      </Router>
      <p>
        typescript not reading
      </p>
      
    </div>
  );
}
export default App;