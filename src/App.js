import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login/Login';
import Register from './components/Login/Register';

function App() {
  return (
    <Router>
      <Route exact path="/login">
        <Login/>
      </Route>
      <Route exact path="/">
        <h1>main</h1>
      </Route>
      <Route exact path="/register">
        <Register/>
      </Route>
    </Router>
  );
}

export default App;
