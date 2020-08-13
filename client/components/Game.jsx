import React, { useState } from 'react';
import Row from './Row';
import SongCard from './SongCard';
import { SpotifyBtn, Button, Label, Title, Input, Container } from './StyledElements';

const Game = (props) => {
  const [songs, setSongs] = useState(songsArray);
  const [index, setIndex] = useState(0);

  const incremeintIndex = () => {
    if (index === songs.length - 1) {
      props.start();
    } else {
      setIndex(index + 1);
    }
  }

  const checkAnswer = () => {
    console.log("checkAnswer invoked", index)
    const answerInput = document.getElementById("answerInput");
    if (answerInput.value.toLowerCase() === songs[index][0].toLowerCase()) {
      props.incrementScore();
      incremeintIndex();
    }
    answerInput.value = "";
  }

  // game in progress
  // ONE SONG PER ROW, NO DRILLING

  return (
    <div>
      <Container>
        <Title>Guess these Funky Toonz</Title>
        <SongCard key={index} song={songs[index]} />
        <Input type="text" name="answerInput" id="answerInput" />
        <Button onClick={checkAnswer}>submit</Button>
        <Button onClick={incremeintIndex}>skip</Button>
      </Container>
    </div>

    // need a <Timer /> component?  MAYBE NOT
  );
};

export default Game;

var songsArray = [
  ['Shape of You',
    'https://p.scdn.co/mp3-preview/84462d8e1e4d0f9e5ccd06f0da390f65843774a2?cid=774b29d4f13844c495f206cafdad9c86'],
  ['Closer',
    'https://p.scdn.co/mp3-preview/8d3df1c64907cb183bff5a127b1525b530992afb?cid=774b29d4f13844c495f206cafdad9c86'],
  ['Dance Monkey',
    'https://p.scdn.co/mp3-preview/535ffea66207a0fc07d57fbaea7b5594be797f9b?cid=774b29d4f13844c495f206cafdad9c86'],
  ['Thinking out Loud',
    'https://p.scdn.co/mp3-preview/7fba47d0806142cb34ad2080a5f139eba915fe05?cid=774b29d4f13844c495f206cafdad9c86'],
  ['Havana (feat. Young Thug)',
    'https://p.scdn.co/mp3-preview/663b794c2fc8da8f9bbe33698cb1bac567126a23?cid=774b29d4f13844c495f206cafdad9c86'],
  ['Say You Won\'t Let Go',
    'https://p.scdn.co/mp3-preview/00825cb1779b31d68964eda6f2a7911fc2ae96c6?cid=774b29d4f13844c495f206cafdad9c86'],
  ['Photograph',
    'https://p.scdn.co/mp3-preview/097c7b735ceb410943cbd507a6e1dfda272fd8a8?cid=774b29d4f13844c495f206cafdad9c86'],
  ['New Rules',
    'https://p.scdn.co/mp3-preview/75a1b521de23958a2db9acf4fc8151999ee54bd7?cid=774b29d4f13844c495f206cafdad9c86']
]