import { useState } from "react"
import { IOptions } from "../models/models"

export const useElementWithOptions = (elRef:any) => {
    
  const [positionX, setPositionX] = useState(15)
  const [positionY, setPositionY] = useState(window.innerHeight / 2 - 130)

  const [isOpenContextMenu, setIsOpenContextMenu] = useState(false)

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

  const dragStart = (e:any) => {
  }
  const dragOver = (e:any) => {
    e.preventDefault()
  }
  const dragEnd = (e:any) => {
    e.preventDefault() 
    const blockRefClientRect = elRef.current?.getBoundingClientRect()

    if(!blockRefClientRect) return null

    setPositionX(e.pageX - elRef.current.clientWidth/2)
    setPositionY(e.pageY - 61)  
  }

  return {
    positionX,
    positionY,
    isOpenContextMenu,
    options,
    setSquareOptions,
    dragEnd,
    dragOver,
    dragStart
  }
}