import React from 'react'
import Line from '../Line/Line'
import TextElement from '../TextElement/TextElement'
import Arrow from '../Arrow/Arrow'
import Block from '../Block/Block'

interface IElementProps {
    element: string
}

const ShemeElement = ({element}:IElementProps) => {
  switch(element) {
    case 'line':
        return <Line />
    case 'square':
        return <Block />
    case 'text':
        return <TextElement />
    case 'arrow':
        return <Arrow />
    case 'circle':
        return <Block type="circle" />
    default:
        return null       
  }
}

export default ShemeElement