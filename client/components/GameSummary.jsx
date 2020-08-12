import React, { useState } from 'react';

const GameSummary = () => {
  const [gameOver, setGameOver] = useState(false);

  return (
    <div id="summary">
      <div>
        <p>Correct: </p>
        {}
      </div>
      <div>
        <p>WRONG: </p>
        {}
      </div>
      <div>
        <p>Your Score: </p>
        {}
      </div>
    </div>
  );
};

export default GameSummary;
