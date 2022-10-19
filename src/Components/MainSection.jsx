import React, { useState, useContext } from 'react';

import Header from './Header';
import GameImage from './GameImage';
import CharacterCard from './CharacterCard';

import { GameContext } from '../Context/GameContext';

import imageList from '../other/imageList';

const MainSection = () => {
  const [gameImage] = useState(imageList);

  const { isGameStarted, setIsGameStarted, setIsGameWon, chars } =
    useContext(GameContext);

  const handleClick = () => {
    setIsGameStarted(true);
    setIsGameWon(false);
  };

  const charactersToFind = chars.map((char, index) => {
    return <CharacterCard key={index} char={char} />;
  });

  return (
    <div className='main-section'>
      <Header />
      {isGameStarted ? (
        <GameImage imageUrl={gameImage.imageUrl} />
      ) : (
        <div className='main-section--not-started'>
          <h1>Welcome to Where is Luffy</h1>
          <h3>Be the fastest to find those characters !</h3>
          <div className='main-section--images'>{charactersToFind}</div>
          <button onClick={handleClick}>Start Game</button>
        </div>
      )}
    </div>
  );
};

export default MainSection;
