import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import imageList from '../other/imageList';

import { firestore } from '../firebase/config';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const [chars, setChars] = useState(imageList.itemList);
  const [positionArr, setPositionArr] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);

  const positionRef = firestore.collection('characterList');
  const leaderBoardRef = firestore.collection('leaderBoard');

  const queryScores = leaderBoardRef.orderBy('score', 'asc').limit(10);
  const [scores] = useCollectionData(queryScores, { idField: 'id' });

  const maxScore = positionArr.length;

  useEffect(() => {
    const fetchPosition = async () => {
      const snapshot = await positionRef.get();
      setPositionArr(snapshot.docs.map((doc) => doc.data()));
    };
    fetchPosition().catch(console.error);
  }, []);

  const checkWin = () => {
    if (currentScore === maxScore && maxScore !== 0) {
      setIsGameWon(() => true);
      console.log('Game is won !');
    }
  };

  const checkScore = () => {
    console.log(chars);
    let newScore = 0;
    chars.map((obj) => {
      if (obj.found) {
        return newScore++;
      } else {
        return null;
      }
    });
    setCurrentScore(newScore);
  };

  useEffect(() => {
    checkScore();
  }, [chars]);

  useEffect(() => {
    checkWin();
  }, [currentScore]);

  // useEffect(() => {
  //   const checkWin = () => {
  //     if (currentScore === maxScore) {
  //       setIsGameWon(() => true);
  //     }
  //   };
  //   checkWin();
  // }, [currentScore]);

  // useEffect(() => {
  //   const setGameEnding = () => {
  //     console.log('Game is over!');
  //   };
  //   setGameEnding();
  // }, [isGameWon]);

  const resetGame = () => {
    setChars(imageList.itemList);
    setIsGameWon(false);
    setIsGameStarted(false);
    setCurrentScore(0);
  };

  return (
    <GameContext.Provider
      value={{
        isGameStarted,
        setIsGameStarted,
        chars,
        setChars,
        resetGame,
        positionArr,
        isGameWon,
        setIsGameWon,
        scores,
        currentScore,
        maxScore,
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
