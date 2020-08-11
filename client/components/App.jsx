import React, { useState } from 'react';
import Login from './Login';
import Game from './Game';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   // code to run on component mount
  //   fetch('/authenticateSpotify')
  //     .then((res) => res.json())
  //     .then((res) => setIsLoggedIn(res));
  // }, []);

  if (isLoggedIn) {
    return <Game />;
  }
  return (
    <Login />
    // <Router>
    //   <div>
    //     <Switch>
    //       {/* <Route component={Game} path="/game" /> */}
    //       <Route exact path="/">
    //         <Login />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
};

export default App;
