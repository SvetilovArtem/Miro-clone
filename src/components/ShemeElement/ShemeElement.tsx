import React from 'react'
import Line from '../Line/Line'
import Square from '../Square/Square'
import TextElement from '../TextElement/TextElement'
import Arrow from '../Arrow/Arrow'

interface IElementProps {
    element: string
}

const ShemeElement = ({element}:IElementProps) => {
  switch(element) {
    case 'line':
        return <Line />
    case 'square':
        return <Square />
    case 'text':
        return <TextElement />
    case 'arrow':
        return <Arrow />
    default:
        return null       
  }
}

export default ShemeElement