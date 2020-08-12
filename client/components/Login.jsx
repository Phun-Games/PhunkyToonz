import React, { useState } from 'react';
import styled from 'styled-components';

import CLIENT_SECRET from './sensitive.js';
import CLIENT_ID from './sensitive.js';

const Login = (props) => {
  const SpotifyBtn = styled.button`
    width: 8em;
    height: 5em;
    border-radius: 20px;
    border: 2px solid #1db954;
    color: white;
    background-color: #1db954;
    margin: 0.3em 0.3em;
    display: inline-block;
    padding: 0.25em 1em;
    font-family: 'Sniglet', cursive;
    font-size: 14px;
  `;

  const Button = styled.button`
    width: 6em;
    height: 2em;
    border-radius: 3px;
    border: 2px solid green;
    color: purple;
    margin: 0.3em 0.3em;
    display: inline-block;
    padding: 0.25em 1em;
    font-family: 'Sniglet', cursive;
    font-size: 14px;
  `;

  const Label = styled.label`
    background: transparent;
    border-radius: 3px;
    color: orange;
    margin: 0 0.3em;
    padding: 0.25em 0em;
    font-family: 'Sniglet', cursive;
    font-size: 20px;
  `;

  const Title = styled.h1`
    background: transparent;
    border-radius: 3px;
    color: orange;
    margin: 0 0.3em;
    padding: 0.25em 1em;
    font-family: 'Sniglet', cursive;
    font-size: 50px;
  `;

  const Input = styled.input`
    margin: 0.3em;
  `;

  const CLIENT_ID = 'e2f39df331e944fe9773c22828dcb765';
  const CLIENT_SECRET = 'dbd1577f98514d718cce33f1858c4355';

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
        <a href=""> Log in with Spotify </a>
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
