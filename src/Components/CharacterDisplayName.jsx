import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { GameContext } from '../Context/GameContext';

const CharacterDisplayName = ({ char, setChars, clickedCoordinates }) => {
  const { displayName, found } = char;
  const { positionArr } = useContext(GameContext);
  const { xClicked, yClicked } = clickedCoordinates;

  // Sortir les coordonées du personnage en question grace à l'id en question(obtenu grace au e.target.className)
  // Les comparer aux x clicked et y clicked

  const checkCoordinates = (e) => {};

  const updateCharsState = (e) => {
    if (!found) {
      setChars((prevState) => {
        const newState = prevState.map((obj) => {
          if (obj.id === e.target.className) {
            return { ...obj, found: true };
          }
          return obj;
        });
        return newState;
      });
    }
  };

  const handleClick = (e) => {
    updateCharsState(e);
  };

  return (
    <li onClick={handleClick} className={char.id}>
      {displayName}
    </li>
  );
};

CharacterDisplayName.propTypes = {
  char: PropTypes.object.isRequired,
  setChars: PropTypes.func.isRequired,
  clickedCoordinates: PropTypes.object.isRequired,
};

export default CharacterDisplayName;
