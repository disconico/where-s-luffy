import React from 'react';
import PropTypes from 'prop-types';

import CharacterDisplayName from './CharacterDisplayName';

const CharacterList = ({ coords, chars, setChars, clickedCoordinates }) => {
  const { x, y } = coords;

  const leftPos = Math.round((x / 1240) * 100) + '%';
  const topPos = Math.round((y / 876) * 100) + '%';

  const style = {
    top: topPos,
    left: leftPos,
    backgroundColor: 'white',
  };

  const charsList = chars.map((char, index) => {
    if (!char.found) {
      return (
        <CharacterDisplayName
          key={index}
          char={char}
          setChars={setChars}
          clickedCoordinates={clickedCoordinates}
        />
      );
    } else {
      return null;
    }
  });

  return (
    <div className='character-list' style={style}>
      <div className='character-list--header'>
        <p>{`x : ${x} y: ${y}`}</p>
      </div>
      <div className='character-list--chars'>
        <ul>{charsList}</ul>
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
