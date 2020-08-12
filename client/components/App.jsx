import React, { useState } from 'react';
import Login from './Login';
import Main from './Main';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // immediate fetch '/' to check if in session
  // useEffect(() => {
  //   // code to run on component mount
  //   fetch('/')
  //     .then((res) => res.json())
  //     .then((res) => setIsLoggedIn(res));
  // }, []);

  // useEffect(() => {
  //   // code to run on component mount
  //   fetch('/authenticateSpotify')
  //     .then((res) => res.json())
  //     .then((res) => setIsLoggedIn(res));
  // }, []);

  if (isLoggedIn) {
    return <Main />;
  }
  return <Login />;
};

export default App;
