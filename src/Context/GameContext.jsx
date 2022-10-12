import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <GameContext.Provider value={{ isGameStarted, setIsGameStarted }}>
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
