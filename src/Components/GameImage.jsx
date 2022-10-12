import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CharacterList from './CharacterList';
import useClicked from '../Hooks/useClicked';

const GameImage = ({ imageUrl }) => {
  const [clickedCoordinates, setClickedCoordinates] = useState({ x: 0, y: 0 });
  const [isClicked, click, unClick] = useClicked();

  const handleClick = (e) => {
    setClickedCoordinates(() => ({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    }));
    isClicked ? unClick() : click();
  };

  console.log(clickedCoordinates);

  return (
    <div className='game-image' onClick={handleClick}>
      <img src={imageUrl} />
      {isClicked && <CharacterList coords={clickedCoordinates} />}
    </div>
  );
};

GameImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default GameImage;
