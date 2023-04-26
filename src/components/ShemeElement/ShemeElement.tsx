import React from 'react'
import Line from '../Line/Line'
import TextElement from '../TextElement/TextElement'
import Arrow from '../Arrow/Arrow'
import Block from '../Block/Block'
import { useDispatch, useSelector } from 'react-redux'
import { deleteElementFromBoard } from '../../store/slices/elementsSlice'
import { RootState } from '../../store/store'

interface IElementProps {
    element: string
    id: number
}

const ShemeElement = ({element, id}:IElementProps) => {
    const dispatch = useDispatch()
    const deleteMode = useSelector((state: RootState) => state.elementsReducer.deleteMode)

    const deleteElement = (id: number) => {
        deleteMode && dispatch(deleteElementFromBoard(id))
    }
  switch(element) {
    case 'line':
        return <Line id={id} deleteElement={deleteElement} />
    case 'square':
        return <Block id={id} deleteElement={deleteElement} />
    case 'text':
        return <TextElement id={id} deleteElement={deleteElement} />
    case 'arrow':
        return <Arrow id={id} deleteElement={deleteElement} />
    case 'circle':
        return <Block type="circle" id={id} deleteElement={deleteElement} />
    default:
        return null       
  }
}

export default ShemeElement