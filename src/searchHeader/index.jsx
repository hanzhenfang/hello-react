import React from 'react'
import { useRef } from 'react'
import axios from 'axios'

export default function SearchHeader() {
    const userInput = useRef(null)

    const handleSearch = () => {
        axios.get(`http://api.github.com/search/users?q=${userInput.current.value}`
        ).then(resolve => { console.log(resolve) },
            reason => { console.log("你输入错了") }
        )
    }

    return (
        <>
            <h1>Search GitHub Users</h1>
            <input ref={userInput} type='search' placeholder='输入用户名称' />
            <button onClick={handleSearch}>搜索</button>
        </>
    )
}
