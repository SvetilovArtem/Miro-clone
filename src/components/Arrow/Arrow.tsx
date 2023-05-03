import React, { useRef, useState } from 'react'
import styles from './Arrow.module.scss'
import ContextMenu from '../ContextMenu/ContextMenu'
import { useElementWithOptions } from '../../hooks/useElementWithOptions'

interface IArrowProps {
  id: number
  deleteElement: (id: number) => void
}

const Arrow = ({ id, deleteElement }:IArrowProps) => {
    const arrowRef = useRef<HTMLDivElement | null>(null)

    const [isOpenContextMenu, setIsOpenContextMenu] = useState(false)

    const {
      positionX,
      positionY,
      options,
      setSquareOptions,
      dragEnd,
      dragOver,
      dragStart
    } = useElementWithOptions(arrowRef)
  return (
    <>
        <div 
      className={styles.arrow}
      style={
        { 
          top: `${positionY}px`, 
          left: `${positionX}px`, 
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