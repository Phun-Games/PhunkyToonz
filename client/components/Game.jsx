import React, { useEffect, useState, useRef } from 'react';
import Row from './Row';
import SongCard from './SongCard';
import { SpotifyBtn, Button, Label, Title, TitleMain, Input, GameContainer, GameInput, } from './StyledElements';

const Game = (props) => {
  // const [songs, setSongs] = useState(songsArray);
  const [songs, setSongs] = useState();
  const [index, setIndex] = useState(0);

  useEffect(() => {

    fetch('/api/song')
      .then((res) => res.json())
      .then((result) => {
        console.log('***************ANSWERS***********', result);
        return setSongs(result)
      })
      .catch(console.log('error in Game component fetch request'));

  }, []);


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
      <GameContainer>
        <TitleMain id="game-title">Guess these PhUnKy ToOnZ</TitleMain>

        {songs ? <SongCard key={index} song={songs[index]} /> : (<></>)}
        <div id="guess-input">
          <span id="song-name">ENTER SONG TITLE  </span>
          <Input type="text" name="answerInput" id="answerInput" />

          <Button id="submit-button" onClick={checkAnswer}>submit</Button>
          <Button id="skip-button" onClick={incremeintIndex}>skip</Button>
        </div>
        <br />
        <img id="dj-cat" src="https://media2.giphy.com/media/3ohhwu14nQs3sOKrDO/giphy.gif" />
      </GameContainer>
    </div>

    // need a <Timer /> component?  MAYBE NOT
  );
};

export default Game;

// var songTest = ['test', 'https://drive.google.com/file/d/18R6xcYixBegAjqVEOrxxe_xr6TXshISI/view']

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