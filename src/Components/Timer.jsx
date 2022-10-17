import React, { Fragment, useEffect, useState } from 'react';
import { auth, firestore, timestamp } from '../firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';

import PropTypes from 'prop-types';

import formatTime from '../utils/formatTime';

function Timer({ isGameStarted, isGameWon }) {
  const [timer, setTimer] = useState(0);
  const [user] = useAuthState(auth);
  const leaderBoardRef = firestore.collection('leaderBoard');
  let interval;

  const updateLeaderBoard = async () => {
    const { uid, photoURL, displayName } = user;
    await leaderBoardRef.add({
      score: timer,
      createdAt: timestamp,
      uid,
      photoURL,
      displayName,
    });
  };

  useEffect(() => {
    if (isGameStarted && !isGameWon) {
      // start interval/timer
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else if (!isGameStarted) {
      // stops/resets timer
      clearInterval(interval);
      setTimer(0);
    } else if (isGameStarted && isGameWon) {
      clearInterval(interval);
      updateLeaderBoard();
    }
    // when component unmounts stops timer / clearInterval
    return () => {
      clearInterval(interval);
    };
  }, [isGameStarted, isGameWon]);

  return <Fragment>{formatTime(timer)}</Fragment>;
}

Timer.propTypes = {
  isGameStarted: PropTypes.bool.isRequired,
  isGameWon: PropTypes.bool.isRequired,
};

export default Timer;
