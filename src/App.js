import React from 'react';
import { useState } from 'react';

import './App.css'
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';

function App() {
  const [ifLogin, setIfLogin] = useState(false)
  return (
    <>{
      ifLogin ? <Dashboard /> : <Login setIfLogin={setIfLogin} />
    }
    </>
  );
}

export default App;
