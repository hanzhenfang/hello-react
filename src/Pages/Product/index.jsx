import React from 'react'
import { Outlet } from 'react-router-dom'

// 商品页面

export default function Product() {
    return (
        <div style={{ height: "100%" }}><Outlet /></div>
    )
}
