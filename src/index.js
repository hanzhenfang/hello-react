import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import A from './renderProps'

ReactDOM.render(
  <React.StrictMode>
    <A />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


