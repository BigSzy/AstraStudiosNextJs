import React from "react";
import styles from './LuckyDisplay.module.scss'

function LuckyDisplay({ image }) {
  return (
    <div className="container">
      <div className={styles.imageWrapper}>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default LuckyDisplay;
