import React, { useState } from 'react'
import styles from './ContextMenu.module.scss'
import { IOptions } from '../Block/Block'

interface IContextMenuProps {
    setContextMenu: (e: boolean) => void
    text: string
    setOptions: (o: IOptions) => void
    options: IOptions
}

const ContextMenu = ({ setContextMenu, text, setOptions, options }:IContextMenuProps) => {
    const [width, setWidth] = useState(options.width)
    const [height, setHeight] = useState(options.height)
    const [deg, setDeg] = useState(options.deg)
    const [bgColor, setBgColor] = useState(options.bgColor)

  return (
    <>
        <div className={styles.over} onClick={() => setContextMenu(false)}></div>
        <div className={styles.contextMenu}>
            <h3>Опции для блока: {text}</h3>
            <ul>
                <li>Введите длину: <input type='text' value={width} onChange={(e) => setWidth(e.target.value)} /></li>
                <li>Введите ширину: <input type='text' value={height} onChange={(e) => setHeight(e.target.value)} /></li>
                <li>Введите угол поворота: <input type='text' value={deg} onChange={(e) => setDeg(e.target.value)} /></li>
                <li>Выберите цвет: 
                    <div>
                        <input type='color' value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
                    </div>
                </li>
            </ul>
            <button type='button' onClick={() => setOptions({width, height, deg, bgColor})}>&#10004; OK</button>
        </div>
    </>

  )
}

export default ContextMenu