import React, { useRef, useState } from 'react'
import styles from './TextElement.module.scss'
import ContextMenu from '../ContextMenu/ContextMenu'
import { IOptions } from '../../models/models'

interface ITextElementProps {
    text?: string
    id: number
    deleteElement: (id: number) => void
}

const TextElement = ({text, id, deleteElement}:ITextElementProps) => {
    const [typeMode, setTypeMode] = useState(false)
    const [value, setValue] = useState(text)

    const [isOpenContextMenu, setIsOpenContextMenu] = useState(false)

    const initialOptions = {
      width: '320',
      height: '40',
      bgColor: '#333',
      deg: ''
    }
    const [options, setOptions] = useState<IOptions>(initialOptions)

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

      const setSquareOptions = (options:IOptions) => {
        setOptions(options)
        setIsOpenContextMenu(false)
      }

    const typeModeHandler = () => setTypeMode(!typeMode)
    const valueHandler = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

  return (
    <>
        <div 
        className={styles.textEl}
        onDoubleClick={typeModeHandler}
        style={{ 
          top: positionY, 
          left: positionX, 
          color: options.bgColor, 
          transform: `rotate(${options.deg}deg)`
        }}
        draggable
        onDragStart={dragStart} 
        onDragOver={dragOver}
        onDragEnd={dragEnd}
        ref={textElRef}
        onClick={() => deleteElement(id)}
        onContextMenu={e => {
          e.preventDefault()
          setIsOpenContextMenu(!isOpenContextMenu)
          return false
        }}
    >
        {
            typeMode ? 
                <input type='text' value={value} onChange={valueHandler} /> 
                : <span style={{fontSize: `${options.height}px`}}>{value ? value : 'Type text...'}</span>
        }
      </div>
      {isOpenContextMenu && 
        <ContextMenu 
          setContextMenu={setIsOpenContextMenu} 
          setOptions={setSquareOptions} 
          options={options}
          text="" 
        />
      }
    </>

  )
}

export default TextElement