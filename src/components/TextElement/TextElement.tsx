import React, { useRef, useState } from 'react'
import styles from './TextElement.module.scss'

interface ITextElementProps {
    text?: string
}

const TextElement = ({text}:ITextElementProps) => {
    const [typeMode, setTypeMode] = useState(false)
    const [value, setValue] = useState(text)

    const textElRef = useRef<HTMLDivElement | null>(null)
    const [positionX, setPositionX] = useState(15)
    const [positionY, setPositionY] = useState(window.innerHeight / 2 - 130)

    const dragStart = () => {
        if(!textElRef) return null 
      }
      const dragOver = (e:any) => {
        e.preventDefault()
      }
      const dragEnd = (e:any) => {
        e.preventDefault()  
    
        if(!textElRef.current?.clientWidth) return null
    
        setPositionX(e.clientX)
        setPositionY(e.clientY - 80) 
      }

    const typeModeHandler = () => setTypeMode(!typeMode)
    const valueHandler = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

  return (
    <div 
        className={styles.textEl}
        onDoubleClick={typeModeHandler}
        style={{ top: positionY, left: positionX}}
        draggable
        onDragStart={dragStart} 
        onDragOver={dragOver}
        onDragEnd={dragEnd}
        ref={textElRef}
    >
        {
            typeMode ? 
                <input type='text' value={value} onChange={valueHandler} /> 
                : <span>{value ? value : 'Type text...'}</span>
        }
    </div>
  )
}

export default TextElement