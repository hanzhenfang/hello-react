import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Contents from './contents/index'

export default function Messgae() {
    const [navList, setNavList] = useState(
        [{ id: 1, title: "content1" },
        { id: 2, title: "content2" },
        { id: 3, title: "content3" },

        ])
    return (
        <>
            <ul>
                {
                    navList.map((iterms) => {
                        return (
                            <li key={iterms.id}>
                                <Link to='/home/message/content'>{iterms.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <h2>message的展示区</h2>
            <Routes>
                <Route path='/content' element={<Contents />} />
            </Routes>
        </>
    )
}
