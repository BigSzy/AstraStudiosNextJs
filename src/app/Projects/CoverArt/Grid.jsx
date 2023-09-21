import React from "react";
import styles from '/src/app/Styles/Grid3x.module.scss'

function Grid() {
  return (
    <div className="container">
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <img src="/img/coverArt/Enough.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/coverArt/Famous.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/coverArt/RobinHood.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/coverArt/Sank.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/coverArt/SpillingIt.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/coverArt/Ways.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Grid;
