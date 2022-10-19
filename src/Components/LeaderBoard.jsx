import React, { useContext } from 'react';

import { GameContext } from '../Context/GameContext';
import LeaderScore from './LeaderScore';
import Header from './Header';

const LeaderBoard = () => {
  const { scores } = useContext(GameContext);

  return (
    <div className='leaderBoard'>
      <Header />
      <div className='score-board'>
        {!scores && <h1>Loading...</h1>}
        {scores &&
          scores.map((result, index) => (
            <LeaderScore result={result} key={index} index={index} />
          ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
