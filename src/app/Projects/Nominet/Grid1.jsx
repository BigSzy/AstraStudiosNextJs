import React from "react";
import styles from "/src/app/Styles/Grid.module.scss";

function Grid1() {
  return (
    <div className="container">
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <img src="/img/nominet/Sketch1.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/nominet/Sketch2.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/nominet/Sketch3.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/nominet/Sketch4.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/nominet/Sketch5.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/nominet/Sketch6.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Grid1;
