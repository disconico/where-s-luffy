import React, { useState, useContext } from 'react';

import Header from './Header';
import GameImage from './GameImage';

import { GameContext } from '../Context/GameContext';

import imageList from '../other/imageList';

const MainSection = () => {
  const [gameImage] = useState(imageList);

  const { isGameStarted, setIsGameStarted } = useContext(GameContext);

  const handleClick = () => {
    setIsGameStarted(true);
  };

  return (
    <div className='main-section'>
      <Header />
      {isGameStarted ? (
        <GameImage imageUrl={gameImage.imageUrl} />
      ) : (
        <button onClick={handleClick}>Start Game</button>
      )}
    </div>
  );
};

export default MainSection;
