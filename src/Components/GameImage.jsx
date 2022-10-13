import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import CharacterList from './CharacterList';

import useClicked from '../Hooks/useClicked';
import { GameContext } from '../Context/GameContext';

const GameImage = ({ imageUrl }) => {
  const [clickedCoordinates, setClickedCoordinates] = useState({ x: 0, y: 0 });
  const [isClicked, click, unClick] = useClicked();
  const { chars, setChars } = useContext(GameContext);
  //   console.log(positionArr);

  const handleClick = (e) => {
    if (e.target.className === 'game-image--img') {
      setClickedCoordinates(() => ({
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
      }));
    }
    isClicked ? unClick() : click();
  };

  return (
    <div className='game-image' onClick={handleClick}>
      <img src={imageUrl} className='game-image--img' />
      {isClicked && (
        <CharacterList
          coords={clickedCoordinates}
          chars={chars}
          setChars={setChars}
          clickedCoordinates={clickedCoordinates}
        />
      )}
    </div>
  );
};

GameImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default GameImage;
