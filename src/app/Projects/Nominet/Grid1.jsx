import React from "react";
import styles from "/src/app/Styles/Grid.module.scss";

function Grid1() {
  return (
    <div className="container">
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <img src="/img/nominet/Sketch1.png" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/nominet/Sketch2.png" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/nominet/Sketch3.png" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/nominet/Sketch4.png" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/nominet/Sketch5.png" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/nominet/Sketch6.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Grid1;
