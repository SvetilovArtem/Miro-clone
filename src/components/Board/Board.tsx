import {AiOutlineMinus, AiOutlineArrowUp} from 'react-icons/ai'
import {BsCircle} from 'react-icons/bs'
import {BiSquare, BiText} from 'react-icons/bi'
import { ITool } from '../../models/models'
import ToolsPanel from '../ToolsPanel/ToolsPanel'
import styles from './Board.module.scss'
import ShemeElement from '../ShemeElement/ShemeElement'
import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'

const Board = () => {
    const tools: ITool[] = [
        {id: 1, name: 'Line', order: 1, icon: <AiOutlineMinus />, element: 'line'},
        {id: 2, name: 'Arrow', order: 2, icon: <AiOutlineArrowUp />, element: 'arrow'},
        {id: 3, name: 'Circle', order: 3, icon: <BsCircle />, element: 'circle'},
        {id: 4, name: 'Square', order: 4, icon: <BiSquare />, element: 'square'},
        {id: 5, name: 'Text', order: 5, icon: <BiText />, element: 'text'},
    ]

    const addedElementsOnBoard = useSelector((state: RootState) => state.elementsReducer.addedElementsOnBoard)
    
  return (
    <div className={styles.board}>
        <ToolsPanel 
          tools={tools} 
        />
        {addedElementsOnBoard.map(element => <ShemeElement element={element.element} key={element.id} />)}
    </div>
  )
}

export default Board