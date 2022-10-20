import React from 'react';
import PropTypes from 'prop-types';

import CharacterDisplayName from './CharacterDisplayName';

const CharacterList = ({ coords, chars, setChars, clickedCoordinates }) => {
  const { x, y } = coords;

  const leftPos =
    x >= 1120
      ? Math.round((1120 / 1240) * 100) + '%'
      : Math.round((x / 1240) * 100) + '%';

  const topPos =
    y >= 720
      ? Math.round((720 / 876) * 100) + '%'
      : Math.round((y / 876) * 100) + '%';

  const style = {
    top: topPos,
    left: leftPos,
  };

  const charsList = chars.map((char, index) => {
    return (
      <CharacterDisplayName
        key={index}
        char={char}
        setChars={setChars}
        clickedCoordinates={clickedCoordinates}
      />
    );
  });

  return (
    <div className='character-list' style={style}>
      {/* <div className='character-list--header'>
        <p>{`x : ${x} y: ${y}`}</p>
      </div> */}
      <div className='character-list--chars'>
        <div className='character-container'>{charsList}</div>
      </div>
    </div>
  );
};

CharacterList.propTypes = {
  coords: PropTypes.object.isRequired,
  chars: PropTypes.array.isRequired,
  setChars: PropTypes.func.isRequired,
  clickedCoordinates: PropTypes.object.isRequired,
};

export default CharacterList;
