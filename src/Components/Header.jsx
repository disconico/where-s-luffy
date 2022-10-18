import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';

import SignOut from './SignOut';

import { GameContext } from '../Context/GameContext';
import Timer from './Timer';
import profilePicture from '../assets/profile_placeholder.png';

const Header = () => {
  const [user] = useAuthState(auth);
  const { isGameWon, isGameStarted, resetGame, currentScore, maxScore } =
    useContext(GameContext);

  return (
    <header className='header'>
      <div className='header--left'>
        <Link to='/where-s-waldo'>
          <h1>Where is Luffy ?</h1>
        </Link>
      </div>
      <div className='header--middle'></div>
      {isGameStarted ? (
        <>
          <p>
            Current score : {currentScore}/{maxScore}
          </p>
          <Timer isGameStarted={isGameStarted} isGameWon={isGameWon} />
        </>
      ) : (
        <div className='placeholder-timer'>coucou</div>
      )}
      <div className='header--right'>
        <Link to='/where-s-waldo'>
          <button onClick={resetGame}>Restart Game</button>
        </Link>
        <Link to='/where-s-waldo/leaderboard'>
          <button onClick={resetGame}>Leader board</button>
        </Link>
        <SignOut />
        {user && <img src={user.photoURL} />}
        {!user && <img src={profilePicture} />}
      </div>
    </header>
  );
};

export default Header;
