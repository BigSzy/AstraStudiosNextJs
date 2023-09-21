import React from 'react'
import styles from '/src/app/Styles/Grid2x.module.scss'

function Grid2x() {
  return (
    <div className='container'>
        <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
                <img src="/img/iproov/Sketch1.png" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/iproov/Sketch2.png" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/iproov/Sketch3.png" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/iproov/Sketch4.png" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/iproov/Sketch5.png" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/iproov/Sketch6.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Grid2x