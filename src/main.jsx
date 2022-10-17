import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { GameContextProvider } from './Context/GameContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GameContextProvider>
      <App />
    </GameContextProvider>
  </BrowserRouter>
);
