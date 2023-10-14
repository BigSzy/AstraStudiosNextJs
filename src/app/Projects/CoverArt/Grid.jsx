import React from "react";
import styles from "./Grid.module.scss";

function Grid() {
  return (
    <div className="container">
      <div className={styles.gridContainer1}>
        <div className={styles.gridItem}>
          <img src="/img/coverArt/Enough.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/coverArt/Famous.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/coverArt/RobinHood.jpg" alt="" />
        </div>
      </div>
      <div className={styles.gridContainer2}>
        <div className={styles.gridItem}>
          <img src="/img/coverArt/Sank.jpg" alt="" />
        </div>

        <div className={styles.gridItem}>
          <img src="/img/coverArt/Ways.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Grid;
