import React, { useRef, useState } from 'react'
import styles from './Line.module.scss'

const Line = () => {
    const lineRef = useRef<HTMLSpanElement | null>(null)
    const [positionX, setPositionX] = useState(15)
    const [positionY, setPositionY] = useState(window.innerHeight / 2 - 130)

    const dragStart = () => {
        if(!lineRef) return null 
      }
      const dragOver = (e:any) => {
        e.preventDefault()
      }
      const dragEnd = (e:any) => {
        e.preventDefault()  
    
        if(!lineRef.current?.clientWidth) return null
    
        setPositionX(e.clientX)
        setPositionY(e.clientY - 60) 
      }
  return (
    <span 
        className={styles.line} 
        style={{ top: positionY, left: positionX}}
        draggable
        onDragStart={dragStart} 
        onDragOver={dragOver}
        onDragEnd={dragEnd}
        ref={lineRef}
    ></span>
  )
}

export default Line