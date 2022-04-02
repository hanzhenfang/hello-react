import React from 'react';
import { NavLink, HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home/index'
import About from './components/about/index'
import Footer from './components/footer';

function App() {

  return (
    <>
      <Router>
        <h1>欢迎来到我的网站</h1>
        <div>
          <h2>导航栏</h2>
          <NavLink to='/hanzhenfang/about'>About</NavLink>
          <br />
          <NavLink to='/hanzhenfang/home'>Home</NavLink>
        </div>

        <div>
          <h2>展示区</h2>

          <Routes>
            <Route path='/hanzhenfang/about' element={<About />} />
            <Route path='/hanzhenfang/home' element={<Footer />} />
            <Route path='/hanzhenfang/home' element={<Home />} />
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
