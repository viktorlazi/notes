import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, BrowserRouter} from 'react-router-dom'
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Notes from './components/App/Notes'
import Test from './Test'

function App() {
  return (
    <BrowserRouter basename="/notes">
      <Route exact path="/login">
        <Login/>
      </Route>
      <Route exact path="/">
        <Notes/>
      </Route>
      <Route exact path="/register">
        <Register/>
      </Route>
      <Route exact path="/test">
        <Test/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
