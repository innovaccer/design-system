import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// import '@innovaccer/design-system/css';
import '@innovaccer/design-system/dist/esm/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
