import React, { DragEvent, useRef, useState } from 'react'
import styles from './Block.module.scss'
import ContextMenu from '../ContextMenu/ContextMenu'
import { IOptions } from '../../models/models'

interface IBlockProps {
  type?: string
  id: number
  deleteElement: (id: number) => void
}

const Block = ({ type="square", id, deleteElement }:IBlockProps) => {
  const blockRef = useRef<HTMLDivElement | null>(null)

  const [positionX, setPositionX] = useState(15)
  const [positionY, setPositionY] = useState(window.innerHeight / 2 - 130)
  const [enter, setEnter] = useState(false)

  const [isOpenContextMenu, setIsOpenContextMenu] = useState(false)

  const [typeMode, setTypeMode] = useState(false)
  const [text, setText] = useState('')

  const initialOptions = {
    width: '80',
    height: '80',
    bgColor: '#fff',
    deg: ''
  }
  const [options, setOptions] = useState<IOptions>(initialOptions)

  const setSquareOptions = (options:IOptions) => {
    setOptions(options)
    setIsOpenContextMenu(false)
  }

  const dragStart = (e:DragEvent) => {

  }
  const dragOver = (e:any) => {
    e.preventDefault()
  }
  const dragEnd = (e:DragEvent) => {
    e.preventDefault() 
    const blockRefClientRect = blockRef.current?.getBoundingClientRect()

    if(!blockRefClientRect) return null
    console.log(e.pageX-blockRefClientRect.left)
    setPositionX(e.pageX - e.currentTarget.clientWidth / 2)
    setPositionY(e.pageY - 61)  
  }

  // const onBlockRefDown = (e: any) => {
  //   moveAt(e)
  //   console.log('mouse down')
  //   document.onmousemove = function(e) {
  //     moveAt(e)
  //     console.log('mouse move')
  //   }
  // }

  // function moveAt(e:any) {
  //   const coords = getCoords()
  //   if(!coords?.top || !coords.left) return null
  //   let shiftX = e.pageX - coords.left
  //   let shiftY = e.pageY - coords.top
  //   setPositionX(e.pageX - shiftX)
  //   setPositionY(e.pageY - shiftY) 
  // }

  // const getCoords = () => {
  //   if(!blockRef.current) return null
  //   const blockRefClientRect = blockRef.current?.getBoundingClientRect()
  //   return {
  //     top: blockRefClientRect.top,
  //     left: blockRefClientRect.left
  //   }
  // }
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