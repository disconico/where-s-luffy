import React from 'react';
import './App.css';

import { auth, firestore, timestamp } from './firebase/config';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import SignIn from './Components/SignIn';
import MainSection from './Components/MainSection';

function App() {
  const [user] = useAuthState(auth);

  return <div className='app'>{user ? <MainSection /> : <SignIn />}</div>;
}

export default App;
