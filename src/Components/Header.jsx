import React from 'react';

import SignOut from './SignOut';

const Header = () => {
  return (
    <header className='header'>
      <div className='header--left'>
        <h1>Where is Luffy ?</h1>
      </div>
      <div className='header--middle'>01:16:67</div>
      <div className='header--right'>
        <button>Leader board</button>
        <SignOut />
      </div>
    </header>
  );
};

export default Header;
