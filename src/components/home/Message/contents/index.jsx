import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Contents() {
    const { state: { id, content } } = useLocation(); //结构赋值
    const navigate = useNavigate();

    const back = () => {
        navigate(-1);
    }
    const forward = () => {
        navigate(1);
    }

    return (
        <>
            <button onClick={back}>后退</button>
            <button onClick={forward}>前进</button>
            <p>{id}</p>
            <p>{content}</p>
        </>
    )
}
