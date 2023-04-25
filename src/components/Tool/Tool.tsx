import styles from './Tool.module.scss'
import { ITool } from '../../models/models'

interface IToolProps {
    tool: ITool,
    onClick: (tool: ITool) => void
}

const Tool = ({ tool, onClick }:IToolProps) => {
  return (
    <div className={styles.tool} onClick={() => onClick(tool)}>
       {tool.icon}
    </div>
  )
}

export default Tool