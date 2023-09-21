import React from 'react'
import styles from "./Display.module.scss"

function CharaterDisplay() {
  return (
    <div className='container'>
        <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
                <img src="/img/littlefox/Fox1.png" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/littlefox/Fox2.png" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/littlefox/Fox3.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default CharaterDisplay