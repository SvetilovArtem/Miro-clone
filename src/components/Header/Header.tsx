import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
        <div>Miro clone</div>
        <div>
            <span>About</span>
        </div>
    </header>
  )
}

export default Header