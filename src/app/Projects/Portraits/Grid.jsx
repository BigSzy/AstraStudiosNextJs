import React from "react";
import styles from "/src/app/Styles/Grid2x.module.scss";

function Grid() {
  return (
    <div className="container">
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <img src="/img/portraits/Rashford.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/portraits/Kobe.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/portraits/Leo.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/portraits/BlackPanther.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Grid;
