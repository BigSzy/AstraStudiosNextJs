import React from "react";
import styles from "./LuckyDev.module.scss";

function LuckyDev() {
  return (
    <div className="container">
      <div className={styles.gridContainer}>
        <div className={styles.gridItem1}>
          <img src="/img/lucky/Poses.png" alt="" />
        </div>
        <div className={styles.gridItem2}>
          <img src="/img/lucky/Faces.png" alt="" />
        </div>
        <div className={styles.gridItem3}>
          <img src="/img/lucky/LuckyGif.gif" alt="" />
        </div>
      </div>
    </div>
  );
}

export default LuckyDev;
