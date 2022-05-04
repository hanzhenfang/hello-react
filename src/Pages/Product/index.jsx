import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

import './index.css'
// 商品页面

export default function Product() {
    return (
        <>
            <div className='root'>
                <Outlet />
            </div>
        </>

    )
}
