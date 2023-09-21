import React from 'react'
import styles from "./SketchDisplay.module.scss"

function SketchDisplay() {
  return (
    <div className='container'>
        <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
                <img src="/img/littlefox/Sketch1.jpg" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/littlefox/Sketch2.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default SketchDisplay