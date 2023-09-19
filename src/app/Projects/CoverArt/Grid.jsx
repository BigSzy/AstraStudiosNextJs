import React from "react";
import styles from '/src/app/Styles/Grid3x.module.scss'

function Grid() {
  return (
    <div className="container">
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <img src="/img/coverArt/Enough.png" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/coverArt/Famous.png" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/coverArt/RobinHood.png" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/coverArt/Sank.png" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/coverArt/SpillingIt.png" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/coverArt/Ways.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Grid;
