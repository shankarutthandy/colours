import React from 'react'
import {useSpring,animated} from 'react-spring';
import './Palette.css'
export default function MenuWrapper(props) {
    const { right } = useSpring({
        from: { right: "-100%" },
        right: props.vis ? "0" : "-100%"
      });
      return (<animated.div style={{right:right}} className='menubar'>
          {props.children}
      </animated.div>)
}
