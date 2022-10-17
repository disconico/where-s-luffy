import React from 'react';

import { firestore } from '../firebase/config';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const LeaderBoard = () => {
  const leaderBoardRef = firestore.collection('leaderBoard');
  const query = leaderBoardRef.orderBy('score', 'asc').limit(10);

  const [scores] = useCollectionData(query, { idField: 'id' });
  console.log(scores);

  return (
    <div className='leaderBoard'>
      {!scores && <h1>Loading...</h1>}
      {scores &&
        scores.map((score, index) => {
          return <p key={index}>{score.score}</p>;
        })}
    </div>
  );
};

export default LeaderBoard;
