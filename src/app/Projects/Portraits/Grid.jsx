import React from "react";
import styles from "/src/app/Styles/Grid2x.module.scss";

function Grid() {
  return (
    <div className="container">
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <img src="/img/portraits/Rashford.png" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/portraits/Kobe.png" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/portraits/Leo.png" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/portraits/BlackPanther.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Grid;
