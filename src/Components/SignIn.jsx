import React from 'react';
import OPLogo from '../assets/OPLogo.png';
import WaldoLogo from '../assets/WaldoLogo.png';
import GoogleLogo from '../assets/google-color-icon.svg';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/config';

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <div className='sign-in-section'>
      <div className='signIn-logo-section'>
        <img src={OPLogo} className='signIn-logo'></img>
        <h1 className='header--left--x'>X</h1>
        <img src={WaldoLogo} className='signIn-logo'></img>
      </div>
      <button onClick={signInWithGoogle} className='signIn-btn'>
        <span>Sign in with Google</span>{' '}
        <img src={GoogleLogo} className='google-logo' alt='google logo' />
      </button>
    </div>
  );
};

export default SignIn;
