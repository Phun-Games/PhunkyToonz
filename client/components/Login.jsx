import React, { useState } from 'react';
// import styled from 'styled-components';
import { SpotifyBtn, Button, Label, Title, Input } from './StyledElements';
import { CLIENT_ID, CLIENT_SECRET } from './sensitive.js';

// import CLIENT_SECRET from './sensitive.js';
// import CLIENT_ID from './sensitive.js';

const Login = (props) => {
  const spotifyLogin = (e) => {
    fetch(
      `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=localhost%3A8080%2Ftest`
    )
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div>
      <Title>PhunkyToonz</Title>
      <div>
        {/* Enter OAuth link below */}
        <SpotifyBtn onClick={spotifyLogin}>Log in with Spotify</SpotifyBtn>
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
