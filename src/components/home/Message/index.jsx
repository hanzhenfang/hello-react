import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Contents from './contents/index'

export default function Messgae() {
  const [navList] = useState(
    [{ id: 1, title: "content1", content: "你的名字" },
    { id: 2, title: "content2", content: "是我见过" },
    { id: 3, title: "content3", content: "最短的情书❤️" },

    ])
  return (
    <>
      <ul>
        {
          navList.map((iterms) => {
            return (
              <li key={iterms.id}>
                <Link to='content'
                  state={{
                    id: iterms.id,
                    content: iterms.content
                  }}
                > {iterms.title} </Link>
              </li>
            )
          })
        }
      </ul>
      <h2>message的展示区</h2>
      <Routes>
        <Route path='content' element={<Contents />} />
      </Routes>
    </>
  )
}
