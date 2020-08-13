import React, { useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';
import Login from './Login';
import Main from './Main';
// import {
//   Switch,
//   Route,
//   Redirect,
//   BrowserRouter as Router,
// } from 'react-router-dom';

// const didMountRef = useRef(false)
// useEffect(() => {
//   if (didMountRef.current) {
//     doStuff()
//   } else didMountRef.current = true
// }
// }



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  // const didMountRef = useRef(false)
  // console.log("DIDMOUNTREF CURRENT****", didMountRef.current);
  // useEffect(() => {
  //   if (didMountRef.current) {
  //     console.log('useref hook hereeeeeee')

  //     fetch('/checkCookie')
  //       .then((res) => {
  //         console.log("RES*****", res) //res.json()})
  //       })
  //       .then((data) => setIsLoggedIn(data.sessionActive));

  //   } else didMountRef.current = true
  // })


  const changeLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  }


  // immediate fetch '/' to check if in session
  useEffect(() => {
    // code to run on component mount
    console.log("COOKIES*****", Cookies.get('token'));
    if (Cookies.get('token')) {
      setIsLoggedIn(!isLoggedIn);
    }
    // console.log('app.jsx useeffect');
    // fetch('/checkCookie')
    //   .then((res) => {
    //     console.log("RES*****", res.json()) //res.json()})
    //   })
    //   // .then(data => console.log(data))
    //   .then((data) => setIsLoggedIn(data.sessionActive))
    //   .catch((err) => console.log('error in /checkCookie', err))
  }, []);

  // useEffect(() => {
  //   // code to run on component mount
  //   fetch('/authenticateSpotify')
  //     .then((res) => res.json())
  //     .then((res) => setIsLoggedIn(res));
  // }, []);

  if (isLoggedIn) {
    return <Main />;
  }
  return <Login changeLoginStatus={changeLoginStatus} />;
};

export default App;
