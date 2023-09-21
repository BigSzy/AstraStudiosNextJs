import React from 'react'
import styles from './LuckyGrid.module.scss'

function LuckyGrid() {
  return (
    <div className='container'>
    <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
            <img src="/img/lucky/Grid1.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
            <img src="/img/lucky/Grid2.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
            <img src="/img/lucky/Grid3.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
            <img src="/img/lucky/Grid4.jpg" alt="" />
        </div>
    </div>
</div>
  )
}

export default LuckyGrid