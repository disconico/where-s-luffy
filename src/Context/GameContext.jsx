import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import imageList from '../other/imageList';

import { firestore } from '../firebase/config';

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const [chars, setChars] = useState(imageList.itemList);
  const [positionArr, setPositionArr] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);

  const positionRef = firestore.collection('characterList');

  // const maxScore = positionArr.length;
  const maxScore = 1;
  console.log(maxScore, 'max score');
  console.log(currentScore, 'current score');

  useEffect(() => {
    const fetchPosition = async () => {
      const snapshot = await positionRef.get();
      setPositionArr(snapshot.docs.map((doc) => doc.data()));
    };
    fetchPosition().catch(console.error);
  }, []);

  useEffect(() => {
    const checkScore = () => {
      chars.forEach((obj) => {
        if (obj.found) {
          setCurrentScore((prevScore) => prevScore + 1);
        }
      });
    };
    checkScore();
  }, [chars]);

  useEffect(() => {
    const checkWin = () => {
      if (currentScore === maxScore) {
        setIsGameWon(() => true);
      }
    };
    checkWin();
  }, [currentScore]);

  useEffect(() => {
    const setGameEnding = () => {
      console.log('Game is over!');
    };
    setGameEnding();
  }, [isGameWon]);

  return (
    <GameContext.Provider
      value={{
        isGameStarted,
        setIsGameStarted,
        chars,
        setChars,
        positionArr,
        isGameWon,
      }}
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
