import React, { useRef, useState } from 'react'
import styles from './Block.module.scss'
import ContextMenu from '../ContextMenu/ContextMenu'
import { IOptions } from '../../models/models'

interface IBlockProps {
  type?: string
}

const Block = ({ type="square" }:IBlockProps) => {
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

  const dragStart = () => {
      if(!blockRef) return null 
    }
  const dragOver = (e:any) => {
    e.preventDefault()
  }
  const dragEnd = (e:any) => {
    e.preventDefault()  
    if(!blockRef.current?.clientWidth) return null
    setPositionX(e.pageX - blockRef.current?.clientWidth / 2)
    setPositionY(e.pageY - blockRef.current?.clientHeight / 2)  
  }
  return (
    <>
    <div 
      className={enter ? styles.square + ' ' + styles.lighter : styles.square}
      style={
        { 
          top: positionY, 
          left: positionX, 
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
      onDragEnter={()=>setEnter(true)}
      onDragLeave={()=>setEnter(false)}
      onDrop={()=>{}}
      onDoubleClick={() => setTypeMode(!typeMode)}
      onContextMenu={e => {
        e.preventDefault()
        setIsOpenContextMenu(!isOpenContextMenu)
        return false
      }}
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