import React from 'react'
import { useRef } from 'react'
import axios from 'axios'
import './index.css'

export default function SearchHeader(props) {
    const userInput = useRef(null)

    const handleSearch = () => {
        if (userInput.current.value !== "") {
            props.setFirstIn(false)
            props.setLoding(true)
            axios.get(`http://api.github.com/search/users?q=${userInput.current.value}`)
                .then(resolve => {
                    props.setLoding(false)
                    props.setUsers(resolve.data.items)
                }, reason => {
                    props.setText(reason.message)
                }
                )
        }
    }

    return (
        <>
            <div className='wrapper'>
                <h1>搜索github用户</h1>
                <input ref={userInput} type='search' placeholder='输入用户名称' />
                <button onClick={handleSearch}>搜索</button>
            </div>
        </>
    )

}