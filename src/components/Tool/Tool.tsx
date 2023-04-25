import styles from './Tool.module.scss'
import { ITool } from '../../models/models'

interface IToolProps {
    tool: ITool,
    onClick: (tool: ITool) => void
    deleteMode: boolean
}

const Tool = ({ tool, onClick, deleteMode }:IToolProps) => {
  return (
    <div className={styles.tool} style={deleteMode && tool.name==='Delete' ? {backgroundColor: 'red'} : {backgroundColor: '#fff'}} onClick={() => onClick(tool)}>
       {tool.icon}
    </div>
  )
}

export default Tool