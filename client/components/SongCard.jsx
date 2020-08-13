import React, { useState } from 'react';
import { Audio, } from './StyledElements';

const SongCard = (props) => {

  return (
    <Audio controls autoPlay>
      <source src={props.song[1]} type={"audio/ogg"} />
      <source src={"horse.mp3"} type={"audio/mpeg"} />
    Your browser does not support the audio element.
    </Audio>
  )
}

export default SongCard;