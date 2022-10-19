import React from 'react';
import PropTypes from 'prop-types';

import formatTime from '../utils/formatTime';
import profilePicture from '../assets/profile_placeholder.png';

const LeaderScore = ({ result, index }) => {
  const { photoURL, displayName, score } = result;
  const profilePicURL = photoURL;

  return (
    <div className={`leaderBoard--rank ${index}`}>
      <h1>Rank : {index + 1}</h1>
      <img
        src={profilePicURL || profilePicture}
        alt={''}
        className='leader-pic'
        referrerPolicy='no-referrer'
      />
      <h3>{displayName}</h3>
      <p>{formatTime(score)}</p>
    </div>
  );
};

LeaderScore.propTypes = {
  result: PropTypes.object,
  index: PropTypes.number,
};

export default LeaderScore;
