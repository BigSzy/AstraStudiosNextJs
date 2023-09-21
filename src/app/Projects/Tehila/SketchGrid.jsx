import React from 'react'
import styles from "/src/app/Styles/Grid3x.module.scss"

function SketchGrid() {
  return (
    <div className='container'>
        <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
                <img src="/img/tehila/SketchBed.gif" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/tehila/SketchCrossing.gif" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/tehila/SketchBook.gif" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/tehila/SketchRun.png" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/tehila/SketchDestination.gif" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/tehila/SketchShalom.gif" alt="" />
            </div>
        </div>

    </div>
  )
}

export default SketchGrid