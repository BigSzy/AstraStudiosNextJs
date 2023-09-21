import React from 'react'
import styles from "/src/app/Styles/Grid.module.scss";


function Grid2() {
  return (
    <div className="container">
    <div className={styles.gridContainer}>
      <div className={styles.gridItem}>
        <img src="/img/nominet/Illustration1.jpg" alt="" />
      </div>
      <div className={styles.gridItem}>
        <img src="/img/nominet/Illustration2.jpg" alt="" />
      </div>
      <div className={styles.gridItem}>
        <img src="/img/nominet/Illustration3.jpg" alt="" />
      </div>
      <div className={styles.gridItem}>
        <img src="/img/nominet/Illustration4.jpg" alt="" />
      </div>
      <div className={styles.gridItem}>
        <img src="/img/nominet/Illustration6.jpg" alt="" />
      </div>
      <div className={styles.gridItem}>
        <img src="/img/nominet/Illustration5.jpg" alt="" />
      </div>
    </div>
  </div>
  )
}

export default Grid2