import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { GameContext } from '../Context/GameContext';

const CharacterDisplayName = ({ char, setChars, clickedCoordinates }) => {
  const { displayName, found, id } = char;
  const { positionArr } = useContext(GameContext);
  const { x: xClicked, y: yClicked } = clickedCoordinates;

  const charIndex = positionArr.map((obj) => obj.id).indexOf(id);
  const currentCharCoords = positionArr[charIndex];
  const { leftRange, topRange } = currentCharCoords;

  const checkCoordinates = () => {
    if (
      leftRange[0] <= xClicked &&
      xClicked <= leftRange[1] &&
      topRange[0] <= yClicked &&
      yClicked <= topRange[1]
    ) {
      updateCharsState();
    } else {
      console.log('i am not the one you are looking for');
    }
  };

  const updateCharsState = () => {
    if (!found) {
      setChars((prevState) => {
        const newState = prevState.map((obj) => {
          if (obj.id === id) {
            return { ...obj, found: true };
          }
          return obj;
        });
        return newState;
      });
    }
  };

  const handleClick = (e) => {
    checkCoordinates();
    // updateCharsState(e);
  };

  return (
    <li onClick={handleClick} className={char.id}>
      {displayName} {found ? '✅' : '❌'}
    </li>
  );
};

CharacterDisplayName.propTypes = {
  char: PropTypes.object.isRequired,
  setChars: PropTypes.func.isRequired,
  clickedCoordinates: PropTypes.object.isRequired,
};

export default CharacterDisplayName;
