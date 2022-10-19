import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = ({ char }) => {
  const { displayName, image } = char;
  return (
    <div className='characterCard'>
      <h3>{displayName}</h3>
      <img src={image} alt='' className='characterCard-img' />
    </div>
  );
};

export default CharacterCard;

CharacterCard.propTypes = {
  char: PropTypes.object.isRequired,
};
