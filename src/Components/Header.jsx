import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import SignOut from './SignOut';

import { GameContext } from '../Context/GameContext';
import Timer from './Timer';

const Header = () => {
  const { isGameWon, isGameStarted } = useContext(GameContext);

  return (
    <header className='header'>
      <div className='header--left'>
        <h1>Where is Luffy ?</h1>
      </div>
      <div className='header--middle'></div>
      <Timer isGameStarted={isGameStarted} isGameWon={isGameWon} />
      <div className='header--right'>
        <Link to='/where-s-waldo/leaderboard'>Leader board</Link>
        <SignOut />
      </div>
    </header>
  );
};

export default Header;
