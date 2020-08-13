import React, { useState } from 'react';

const SongCard = (props) => {

  return (
    <audio controls autoplay>
      <source src={props.song[1]} type={"audio/ogg"} />
      <source src={"horse.mp3"} type={"audio/mpeg"} />
    Your browser does not support the audio element.
    </audio>
  )
}

export default SongCard;