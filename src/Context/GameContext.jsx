import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import imageList from '../other/imageList';

import { firestore } from '../firebase/config';

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [chars, setChars] = useState(imageList.itemList);
  const [positionArr, setPositionArr] = useState([]);

  const positionRef = firestore.collection('characterList');

  useEffect(() => {
    const fetchPosition = async () => {
      const snapshot = await positionRef.get();
      setPositionArr(snapshot.docs.map((doc) => doc.data()));
    };
    fetchPosition().catch(console.error);
  }, []);

  console.log(positionArr);

  return (
    <GameContext.Provider
      value={{ isGameStarted, setIsGameStarted, chars, setChars, positionArr }}
    >
      {children}
    </GameContext.Provider>
  );
};

GameContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { GameContextProvider, GameContext };
