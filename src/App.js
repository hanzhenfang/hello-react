import React from 'react';
import { useRoutes } from 'react-router-dom'
import AllRoutes from './Routes'


import './App.css'

function App() {
  const Routes = useRoutes(AllRoutes)

  return (
    <>
      {/* <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/' element={<Navigate replace to='/login' />} />
      </Routes> */}
      {Routes}
    </>

  );
}

export default App;
