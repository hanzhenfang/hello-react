import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import storageUtiles from './Utils/storageUtiles';
import memoryUtils from './Utils/memoryUtils';

import App from './App';

const user = storageUtiles.getUser();
memoryUtils.user = user


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


