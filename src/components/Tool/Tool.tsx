import styles from './Tool.module.scss'
import { ITool } from '../../models/models'
import { useState } from 'react'
import Tooltip from '../Tooltip/Tooltip'

interface IToolProps {
    tool: ITool,
    onClick: (tool: ITool) => void
    deleteMode: boolean
}

const Tool = ({ tool, onClick, deleteMode }:IToolProps) => {
  const [isHidden, setIsHidden] = useState(false)
  const hiddenHandler = () => {
      setIsHidden(!isHidden)
  }
  return (
    <div 
      className={styles.tool} 
      style={deleteMode && tool.name==='Delete' ? {backgroundColor: 'red'} : {backgroundColor: '#fff'}} 
      onClick={() => onClick(tool)}
      onMouseEnter={hiddenHandler}
      onMouseLeave={hiddenHandler}
    >
       {tool.icon}
       {isHidden && <Tooltip content={tool.name} />}
    </div>
  )
}

export default Tool