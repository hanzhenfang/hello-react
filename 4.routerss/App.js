import React from 'react';
import { NavLink, BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './components/home/index'
import About from './components/about/index'


function App() {

  return (
    <>
      <Router>
        <h1>欢迎来到我的网站</h1>
        <div>
          <h2>导航栏</h2>
          <NavLink to='/about'>About</NavLink>
          <br />
          <NavLink to='/home'>Home</NavLink>
        </div>

        <div>
          <h2>展示区</h2>

          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/home/*' element={<Home />} />
            <Route path='/' element={<Navigate to='/about' />} />
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
