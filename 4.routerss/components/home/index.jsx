import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'

import News from './News/index'
import Message from './Message/index'

export default function Home() {
    return (
        <>
            <div>我Home页面</div>
            <div>
                <NavLink to='/home/news'>News</NavLink>
                <NavLink to='/home/message'>Messages</NavLink>
            </div>
            <div>
                <h1>home页面的展示</h1>
                <Routes>
                    <Route path='/news' element={<News />} />
                    <Route path='/message/*' element={<Message />} />
                </Routes>
            </div>

        </>
    )
}
