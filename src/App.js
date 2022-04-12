import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css'
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';

function App() {
  const [ifLogin, setIfLogin] = useState("login")

  return (
    <Routes>
      <Route path='/login' element={<Login setIfLogin={setIfLogin} />} />
      <Route path='/home' element={<Dashboard />} />
      <Route path='/' element={<Navigate relpace to={`/${ifLogin}`} />} />
    </Routes>
  );
}

export default App;
