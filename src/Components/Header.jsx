import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';

import SignOut from './SignOut';

import { GameContext } from '../Context/GameContext';
import Timer from './Timer';
import profilePicture from '../assets/profile_placeholder.png';
import OPLogo from '../assets/OPLogo.png';
import WaldoLogo from '../assets/WaldoLogo.png';

const Header = () => {
  const [user] = useAuthState(auth);
  const { isGameWon, isGameStarted, resetGame, currentScore, maxScore } =
    useContext(GameContext);

  return (
    <header className='header'>
      <div className='header--left'>
        <Link to='/where-s-waldo' className='home-link'>
          <img src={OPLogo} className='header--left--logo'></img>
          <h1 className='header--left--x'>X</h1>
          <img src={WaldoLogo} className='header--left--logo'></img>
        </Link>
      </div>
      <div className='header--middle'>
        {isGameStarted && (
          <>
            <p>
              Current score : {currentScore}/{maxScore}
            </p>
            <Timer isGameStarted={isGameStarted} isGameWon={isGameWon} />
          </>
        )}
      </div>
      <div className='header--right'>
        <Link to='/where-s-waldo'>
          <button onClick={resetGame}>Restart Game</button>
        </Link>
        <Link to='/where-s-waldo/leaderboard'>
          <button onClick={resetGame}>Leader board</button>
        </Link>
        <SignOut />
        {user && (
          <img
            src={user.photoURL}
            className='user-pic'
            referrerPolicy='no-referrer'
          />
        )}
        {!user && (
          <img
            src={profilePicture}
            className='user-pic'
            referrerPolicy='no-referrer'
          />
        )}
      </div>
    </header>
  );
};
export default Header;
