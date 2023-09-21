import React from 'react'
import styles from "./Display.module.scss"

function SceneDisplay() {
  return (
    <div className='container'>
        <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
                <img src="/img/littlefox/Scene2.png" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/littlefox/Scene3.png" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/littlefox/Scene4.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default SceneDisplay