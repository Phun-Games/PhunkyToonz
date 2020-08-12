import React, { useState } from 'react';
import GameSummary from './GameSummary';

const Box = (props) => {

  // useEffect(() => {


  // });


  // game in progress
  return (
    <div>
 
    <div style={{ 'width': '200px', 'height' : '200px', 'border': 'solid 2px' }}>
      Sq Box
      <audio controls>
        <source src={"https://p.scdn.co/mp3-preview/84462d8e1e4d0f9e5ccd06f0da390f65843774a2?cid=774b29d4f13844c495f206cafdad9c86"} type={"audio/ogg"} />
        <source src={"horse.mp3"} type={"audio/mpeg"} />
        Your browser does not support the audio element.
     </audio>
    </div>


    </div>

    // <div>
    
    //   <audio controls>
    //     <source src={"https://p.scdn.co/mp3-preview/84462d8e1e4d0f9e5ccd06f0da390f65843774a2?cid=774b29d4f13844c495f206cafdad9c86"} type={"audio/ogg"} />
    //     <source src={"horse.mp3"} type={"audio/mpeg"} />
    //     Your browser does not support the audio element.
    //   </audio>
    // </div>
  );
};

export default Box;