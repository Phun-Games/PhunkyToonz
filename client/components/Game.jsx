import React, { useState } from 'react';
import Row from './Row';

const Game = (props) => {

  // useEffect(() => {
  // fetch the songs

  // });






  // game in progress
  return (
    <div>
      <h1>hi game started</h1>
      <Row />
      <Row />
      <Row />

    </div>

    // need a <Timer /> component?

    // <div>
    
    //   <audio controls>
    //     <source src={"https://p.scdn.co/mp3-preview/84462d8e1e4d0f9e5ccd06f0da390f65843774a2?cid=774b29d4f13844c495f206cafdad9c86"} type={"audio/ogg"} />
    //     <source src={"horse.mp3"} type={"audio/mpeg"} />
    //     Your browser does not support the audio element.
    //   </audio>
    // </div>
  );
};

export default Game;