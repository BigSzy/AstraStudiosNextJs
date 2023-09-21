import React from 'react'
import styles from "/src/app/Styles/Grid.module.scss";


function Grid2() {
  return (
    <div className="container">
    <div className={styles.gridContainer}>
      <div className={styles.gridItem}>
        <img src="/img/nominet/Illustration1.png" alt="" />
      </div>
      <div className={styles.gridItem}>
        <img src="/img/nominet/Illustration2.png" alt="" />
      </div>
      <div className={styles.gridItem}>
        <img src="/img/nominet/Illustration3.png" alt="" />
      </div>
      <div className={styles.gridItem}>
        <img src="/img/nominet/Illustration4.png" alt="" />
      </div>
      <div className={styles.gridItem}>
        <img src="/img/nominet/Illustration6.png" alt="" />
      </div>
      <div className={styles.gridItem}>
        <img src="/img/nominet/Illustration5.png" alt="" />
      </div>
    </div>
  </div>
  )
}

export default Grid2