import React from 'react'
import styles from './Tooltip.module.scss'

interface ITooltipProps {
    content: string
}

const Tooltip = ({ content }:ITooltipProps) => {
  return (
    <div className={styles.tooltip}>
        {content}
    </div>
  )
}

export default Tooltip