import React from 'react';
import PropTypes from 'prop-types';

import formatTime from '../utils/formatTime';
import profilePicture from '../assets/profile_placeholder.png';
import one from '../assets/one.png';
import two from '../assets/silver-medal.png';
import three from '../assets/bronze-medal.png';

const LeaderScore = ({ result, index }) => {
  const { photoURL, displayName, score } = result;
  const profilePicURL = photoURL;

  const name = () => {
    if (index === 0) {
      return <h1>{displayName}</h1>;
    } else if (index === 1) {
      return <h2>{displayName}</h2>;
    } else if (index === 2) {
      return <h3>{displayName}</h3>;
    } else {
      return <h4>{displayName}</h4>;
    }
  };

  const rank = () => {
    if (index === 0) {
      return <img src={one} width='80px' />;
    } else if (index === 1) {
      return <img src={two} width='60px' />;
    } else if (index === 2) {
      return <img src={three} width='40px' />;
    } else {
      return <p>{index + 1}</p>;
    }
  };

  const displayScore = () => {
    if (index === 0) {
      return <h1>{formatTime(score)}</h1>;
    } else if (index === 1) {
      return <h2>{formatTime(score)}</h2>;
    } else if (index === 2) {
      return <h3>{formatTime(score)}</h3>;
    } else {
      return <h4>{formatTime(score)}</h4>;
    }
  };

  return (
    <div className={`leaderBoard--rank ${index}`}>
      <div className='rank-container'>{rank()}</div>
      <div className='name-container'>{name()}</div>
      <div className='score-container'>{displayScore()}</div>
      <img
        src={profilePicURL || profilePicture}
        alt={''}
        className='leader-pic'
        referrerPolicy='no-referrer'
      />
    </div>
  );
};

LeaderScore.propTypes = {
  result: PropTypes.object,
  index: PropTypes.number,
};

export default LeaderScore;
