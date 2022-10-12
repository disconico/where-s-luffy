import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const CharacterList = ({ coords }) => {
  const { x, y } = coords;
  //   console.log(x, typeof x);
  // left =  x /1240x100
  // top =  y /876 x100
  //   let topPos;
  const leftPos = Math.round((x / 1240) * 100) + '%';
  const topPos = Math.round((y / 876) * 100) + '%';
  console.log(leftPos);

  //   useEffect(() => {
  //     return leftPos = ((x / 1240))
  //     console.log(leftPos);
  //   }, [x, y]);

  const style = {
    top: topPos,
    left: leftPos,
    backgroundColor: 'white',
  };
  return (
    <div className='character-list' style={style}>
      <div className='character-list--header'>
        <p>{`x : ${x} y: ${y}`}</p>
      </div>
      <div className='character-list--chars'>
        <ul>
          <li>Character A</li>
          <li>Character B</li>
          <li>Character C</li>
        </ul>
      </div>
    </div>
  );
};

CharacterList.propTypes = {
  coords: PropTypes.object.isRequired,
};

export default CharacterList;
