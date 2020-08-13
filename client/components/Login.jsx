import React, { useState } from 'react';
// import styled from 'styled-components';
import { SpotifyBtn, Button, Label, Title, Input } from './StyledElements';

// import CLIENT_SECRET from './sensitive.js';
// import CLIENT_ID from './sensitive.js';

const Login = (props) => {
  const spotifyLogin = (e) => {
    // fetch(
    //   `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2F`
    // )
    //   .then((res) => res.json())
    //   .then((result) => console.log(result));
    fetch('/api/spotifyAuth')
      .then((res) => res.json())
      .then((result) => props.changeLoginStatus())
      .catch(console.log('error in spotifyAuth request'));
  };

  return (
    <div id="login-page">
      <div id="login-box">
        <Title>PhunkyToonz</Title>
      <div>
        {/* Enter OAuth link below */}
        {/* Note: We were getting a CORS-related error, and resolved it by using an <a> tag */}
        <a href="/api/spotifyAuth">
          <SpotifyBtn>Log in with Spotify</SpotifyBtn>
        </a>
      </div>
      <div>
        <div id="un-pw">
          <div>
            <Label>Username:</Label>
            <Input type="text" />
          </div>
          <div>
            <Label>Password:</Label>
            <Input type="text" />
          </div>
        </div>
        <div>
          <Button class="un-pw-button">Register</Button>
          <Button class="un-pw-button">Login</Button>
        </div>
      </div>

    </div>
    <img id="dancingman" src="https://i.pinimg.com/originals/57/e2/09/57e209296e586933febadf06e271a3d3.gif"></img>
    <img id="jackblack" src="https://media0.giphy.com/media/m9cyUUQ548jLLUvwR9/source.gif"></img>
    </div >
  );
};

export default Login;
