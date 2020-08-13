import styled from 'styled-components';

export const SpotifyBtn = styled.button`
  width: 22em;
  height: 3em;
  border-radius: 20px;
  border: 2px solid lightgreen;
  color: white;
  background-color: #1db954;
  margin: 0.3em 0.3em;
  display: inline-block;
  padding: 0.25em 1em;
  font-family: 'Sniglet', cursive;
  font-size: 15px;
  box-shadow: 2px 2px 2px 2px gray;
`;

export const Button = styled.button`
  width: 10em;
  height: 2em;
  border-radius: 5px;
  border: 2px dotted #2921FF;
  color: purple;
  margin: 0.3em 0.3em;
  display: inline-block;
  padding: 0.25em 1em;
  font-family: 'Sniglet', cursive;
  font-size: 14px;
`;

export const ButtonMain = styled.button`
  width: 80%;
  height: 10em;
  border-radius: 50px;
  border: 20px dotted yellow;
  box-shadow: 5px 5px 5px 5px lightgreen;
  color: purple;
  margin: 0.3em 0.3em;
  display: inline-block;
  font-family: 'Sniglet', cursive;
  font-size: 40px;
  font-weight: bold;
  background-image: url('https://images.unsplash.com/photo-1566864101508-75909441df2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1924&q=80');
  background-color: green;
`;


export const Label = styled.label`
  background: transparent;
  border-radius: 3px;
  color: #FFD1EC;
  margin: 0 0.3em;
  padding: 0.25em 0em;
  font-family: 'Sniglet', cursive;
  font-size: 20px;
  text-shadow: 1px 1px black;
`;

export const Title = styled.h1`
  background: transparent;
  border-radius: 3px;
  color: #FC684E;
  margin: 0 0.3em;
  padding: 0.25em 1em;
  font-family: 'Sniglet', cursive;
  font-size: 5vw;
  text-shadow: 3px 3px black;
`;

export const TitleMain = styled.h1`
  background: transparent;
  border-radius: 3px;
  color: lightgreen;
  margin: 0 0.3em;
  padding: 0.25em 1em;
  font-family: 'Luckiest Guy', cursive;
  font-size: 5vw;
  text-shadow: 3px 3px black;
  letter-spacing: 3px;
  padding: 30px;
`;

export const Input = styled.input`
  margin: 0.3em;
  // width: 500px;
  // height: 40px;
  // // border-radius: 10px;
  border: 1px solid brown;
`;

export const GameInput = styled.input`
  display: block;
  margin: 0 auto;
  width: 15em;
`;

export const Audio = styled.audio`
  display: block;
  margin: 1em auto;
`;

export const GameContainer = styled.div`
  text-align: center;
  border: 20px dotted #b6fc03;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  padding: 30px;
  margin: 30px;
  box-shadow: 1px 1px 5px 1px rgb(131, 241, 158);

`;

export const Score = styled.h4`
  text-align: center;
  font-size: 5vw;
`;
