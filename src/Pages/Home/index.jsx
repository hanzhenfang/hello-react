import React from 'react'
import Draggable from 'react-draggable'; //引入第三方轮子
import { animated, useSpring } from '@react-spring/web'
import CustomInput from '../Product/input'

import DisplayDate from '../../Components/面试题/text' //引入我们第一题所接受到的结果。
export default function Home() {
  return (
    <>



      <CustomInput defaultValue={"hello"} maxLength={10} />


    </>
  )
}




