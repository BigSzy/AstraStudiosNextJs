import React from 'react'
import styles from "/src/app/Styles/Grid3x.module.scss"

function IllustrationGrid() {
  return (
    <div className='container'>
        <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
                <img src="/img/tehila/IllustrationBed.jpg" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/tehila/IllustrationCrossing.jpg" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/tehila/IllustrationBook.jpg" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/tehila/IllustrationRun2.jpg" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/tehila/IllustrationDestination.jpg" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/tehila/IllustrationShalom.jpg" alt="" />
            </div>
        </div>

    </div>
  )
}

export default IllustrationGrid