import React from 'react'
import styles from "/src/app/Styles/Grid3x.module.scss"

function IllustrationGrid() {
  return (
    <div className='container'>
        <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
                <img src="/img/tehila/IllustrationBed.png" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/tehila/IllustrationCrossing.png" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/tehila/IllustrationBook.png" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/tehila/IllustrationRun2.png" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/tehila/IllustrationDestination.png" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/tehila/IllustrationShalom.png" alt="" />
            </div>
        </div>

    </div>
  )
}

export default IllustrationGrid