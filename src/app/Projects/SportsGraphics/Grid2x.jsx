import React from 'react'
import styles from 'src/app/Styles/Grid2x.module.scss'


function Grid2x() {
  return (
    <div className='container'>
        <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
                <img src="/img/posters/Curry.png" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/posters/Pogba.png" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/posters/Bulls.png" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/posters/Lebron.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Grid2x