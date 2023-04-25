import React, { useRef, useState } from 'react'
import styles from './ToolsPanel.module.scss'
import { ITool } from '../../models/models'
import Tool from '../Tool/Tool'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { setAddedElementsOnBoard } from '../../store/slices/elementsSlice'

interface IToolsPanelProps {
    tools: ITool[],
}

const ToolsPanel = ({ tools }:IToolsPanelProps) => {

  const dispatch:AppDispatch = useDispatch()

  const toolsRef = useRef<HTMLUListElement | null>(null)
  const [positionX, setPositionX] = useState(15)
  const [positionY, setPositionY] = useState(window.innerHeight / 2 - 130)
  const [hidePanel, setHidePanel] = useState(false)

  const dragStart = () => {
    if(!toolsRef) return null 
  }
  const dragOver = (e:any) => {
    e.preventDefault()
  }
  const dragEnd = (e:any) => {
    e.preventDefault()  

    if(!toolsRef.current?.clientWidth) return null

    setPositionX(e.pageX - toolsRef.current?.clientWidth / 2)
    setPositionY(e.pageY - toolsRef.current?.clientHeight / 2) 
  }

  const onClickHandler = (tool:ITool) => {
    dispatch(setAddedElementsOnBoard(tool))
  }

  return (
    <>
      {!hidePanel && <ul 
      className={styles.tools} 
      onDragStart={dragStart} 
      onDragOver={dragOver}
      onDragEnd={dragEnd}
      draggable="true" 
      style={{position: 'absolute', top: positionY, left: positionX}}
      ref={toolsRef}
      >
          {tools.map(tool => <Tool tool={tool} key={tool.id} onClick={() => onClickHandler({...tool, id: Math.floor(Math.random()*100 + Number(Date()))})} />)}
      </ul>}
    </>
  )
}

export default ToolsPanel