import React, { useState } from 'react';
import GameSummary from './GameSummary';
import Game from './Game';
import { SpotifyBtn, Button, ButtonMain, Label, Title, TitleMain, Input, Container, GameInput, Score, } from './StyledElements';

const Main = (props) => {
  const [startGame, setStartGame] = useState(false);
  const [score, setScore] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  }

  const start = () => {
    if (!startGame) setScore(0);
    setStartGame(!startGame);
  }

  if (startGame) {
    return (
      <>
        <Game start={start} incrementScore={incrementScore} />
        <Score>SCORE: {score}</Score>
      </>
    )
  }

  return (
    <div id="main-button">

      <ButtonMain style={{ 'cursor': 'pointer' }} onClick={() => start()}><TitleMain>Ready to GUESS THE <span id="phunky-toonz">PHUNKY TOONZ?!</span><br /><br /><span id="click-to-start">CLICK TO START!</span></TitleMain></ButtonMain>
      <h4>YOUR SCORE: {score}</h4>

    </div >
  );
};

export default Main;

{/* <audio controls>
<source src={"https://p.scdn.co/mp3-preview/84462d8e1e4d0f9e5ccd06f0da390f65843774a2?cid=774b29d4f13844c495f206cafdad9c86"} type={"audio/ogg"} />
<source src={"horse.mp3"} type={"audio/mpeg"} />
Your browser does not support the audio element.
</audio> */}
