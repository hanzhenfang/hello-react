import React from 'react'
import Draggable from 'react-draggable'; //引入第三方轮子
import { animated, useSpring } from '@react-spring/web'

import DisplayDate from '../../Components/面试题/text' //引入我们第一题所接受到的结果。
export default function Home() {
  return (
    <>


      <div style={{
        width: "100px",
        border: "1px solid black"
      }}>
        <FadeIn >韩振方韩振方</FadeIn>
      </div>

    </>
  )
}



const FadeIn = ({ isVisible, children }) => {
  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24
  })

  return <animated.div style={styles}>{children}</animated.div>
}
