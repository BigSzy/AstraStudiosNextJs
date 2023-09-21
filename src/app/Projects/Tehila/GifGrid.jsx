import React from "react";
import styles from "./Gif.module.scss";

function GifGrid() {
  return (
    <div className="container">
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <img src="/img/tehila/CocoonGif.gif" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/img/tehila/LightEmittingGif.gif" alt="" />
        </div>
      </div>
    </div>
  );
}

export default GifGrid;
