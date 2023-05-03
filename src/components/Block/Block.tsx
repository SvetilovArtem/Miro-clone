import React, { useRef, useState } from 'react'
import styles from './Block.module.scss'
import ContextMenu from '../ContextMenu/ContextMenu'
import { useElementWithOptions } from '../../hooks/useElementWithOptions'

interface IBlockProps {
  type?: string
  id: number
  deleteElement: (id: number) => void
}

const Block = ({ type="square", id, deleteElement }:IBlockProps) => {
  const blockRef = useRef<HTMLDivElement | null>(null)
  const [isOpenContextMenu, setIsOpenContextMenu] = useState(false)
  const [typeMode, setTypeMode] = useState(false)
  const [text, setText] = useState('')
  
  const {
    positionX,
    positionY,
    options,
    setSquareOptions,
    dragEnd,
    dragOver,
    dragStart
  } = useElementWithOptions(blockRef)

  return (
    <>
    <div 
      className={styles.square}
      style={
        { 
          top: `${positionY}px`, 
          left: `${positionX}px`, 
          width: `${options.width}px`, 
          minHeight: `${options.height}px`,
          backgroundColor: options.bgColor,
          transform: `rotate(${options.deg}deg)`,
          borderRadius: type==='circle' ? '50%' : ''
        }}
      draggable
      onDragStart={dragStart} 
      onDragOver={dragOver}
      onDragEnd={dragEnd}
      ref={blockRef}
      onDoubleClick={() => setTypeMode(!typeMode)}
      onContextMenu={e => {
        e.preventDefault()
        setIsOpenContextMenu(!isOpenContextMenu)
        return false
      }}
      onClick={() => deleteElement(id)}
    >{typeMode ? 
      <textarea value={text} onChange={(e)=>setText(e.currentTarget.value)} /> 
      : 
      <p>{text}</p>}
    </div>
    {isOpenContextMenu && 
      <ContextMenu 
        setContextMenu={setIsOpenContextMenu} 
        setOptions={setSquareOptions} 
        options={options}
        text={text} 
      />
    }
    </>
    
  )
}

export default Block