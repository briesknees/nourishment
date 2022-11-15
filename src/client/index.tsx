import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.scss';
import App from './App';
// import { Provider } from 'react-redux';
// import { store } from './store';

const root = createRoot(document.getElementById("root"));


root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);