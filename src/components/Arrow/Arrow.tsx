import React, { useRef, useState } from 'react'
import styles from './Arrow.module.scss'
import ContextMenu from '../ContextMenu/ContextMenu'
import { IOptions } from '../../models/models'

interface IArrowProps {
  id: number
  deleteElement: (id: number) => void
}

const Arrow = ({ id, deleteElement }:IArrowProps) => {
    const arrowRef = useRef<HTMLDivElement | null>(null)
    const [positionX, setPositionX] = useState(15)
    const [positionY, setPositionY] = useState(window.innerHeight / 2 - 130)

    const [isOpenContextMenu, setIsOpenContextMenu] = useState(false)

    const initialOptions = {
      width: '200px',
      height: '10px',
      bgColor: '',
      deg: ''
    }
    const [options, setOptions] = useState<IOptions>(initialOptions)

    const setSquareOptions = (options:IOptions) => {
      setOptions(options)
      setIsOpenContextMenu(false)
    }

    const dragStart = () => {
        if(!arrowRef) return null 
      }
    const dragOver = (e:any) => {
    e.preventDefault()
    }
    const dragEnd = (e:any) => {
      e.preventDefault()  
      setPositionX(e.pageX)
      setPositionY(e.pageY) 
    }
  return (
    <>
        <div 
      className={styles.arrow}
      style={
        { 
          top: positionY, 
          left: positionX, 
          width: `${options.width}px`, 
          transform: `rotate(${options.deg}deg)`
        }}
        draggable
        onDragStart={dragStart} 
        onDragOver={dragOver}
        onDragEnd={dragEnd}
        ref={arrowRef}
        onClick={() => deleteElement(id)}
    >
          <div 
            onContextMenu={e => {
            e.preventDefault()
            setIsOpenContextMenu(!isOpenContextMenu)
            return false
          }}
          ></div>
        </div>
        {isOpenContextMenu && 
          <ContextMenu 
            setContextMenu={setIsOpenContextMenu} 
            setOptions={setSquareOptions} 
            options={options}
            text="Arrow" 
          />
        }
    </>

  )
}

export default Arrow