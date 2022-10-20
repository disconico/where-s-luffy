import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { auth } from './firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';

import SignIn from './Components/SignIn';
import MainSection from './Components/MainSection';
import LeaderBoard from './Components/LeaderBoard';

function App() {
  const [user] = useAuthState(auth);

  return (
    <Routes>
      <Route path='/' element={user ? <MainSection /> : <SignIn />} />
      <Route path='/*' element={user ? <MainSection /> : <SignIn />} />
      <Route
        path='/leaderboard'
        element={user ? <LeaderBoard /> : <SignIn />}
      />
    </Routes>
  );
}

export default App;
