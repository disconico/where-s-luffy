import React, { useContext } from 'react';

import { auth } from '../firebase/config';

import { GameContext } from '../Context/GameContext';

const SignOut = () => {
  const { setIsGameStarted } = useContext(GameContext);

  const handleClick = () => {
    auth.signOut();
    setIsGameStarted(false);
  };
  return auth.currentUser && <button onClick={handleClick}>Sign Out</button>;
};

export default SignOut;
