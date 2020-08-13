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
    <div>
      <Title>PhunkyToonz</Title>
      <div>
        {/* Enter OAuth link below */}
        {/* Note: We were getting a CORS-related error, and resolved it by using an <a> tag */}
        <a href="/api/spotifyAuth">
          <SpotifyBtn>Log in with Spotify</SpotifyBtn>
        </a>
      </div>
      <div>
        <div>
          <Label>Username:</Label>
          <Input type="text" />
        </div>
        <div>
          <Label>Password:</Label>
          <Input type="text" />
        </div>
        <div>
          <Button>Register</Button>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
