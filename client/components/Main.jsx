import React, { useState } from 'react';
import GameSummary from './GameSummary';

const Main = (props) => {
  // gameInProgress
  const [gameInProgress, setGameInProgress] = useState(false);

  const gameProgress = () => {
    setGameInProgress(!gameInProgress);
  };

  if (gameStatus === 'gameOver') {
    return <GameSummary />;
  }
  // game in progress
  return (
    <div>
      <p>this is the game component</p>
    </div>
  );
};

export default Main;
