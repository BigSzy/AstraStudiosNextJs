import React from 'react'
import styles from 'src/app/Styles/Grid2x.module.scss'


function Grid2x() {
  return (
    <div className='container'>
        <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
                <img src="/img/posters/Curry.jpg" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/posters/Pogba.jpg" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/posters/Bulls.jpg" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/posters/Lebron.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Grid2x