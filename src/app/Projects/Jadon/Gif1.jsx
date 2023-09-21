import React from "react";
import styles from "./Gif.module.scss";

function Gif1() {
  return (
    <div className="container">
      <div className={styles.gifContainer}>
        <div className={styles.gifItem}>
          <img src="/img/jadonSancho/Colour.gif" alt="" />
        </div>
        <div className={styles.gifItem}>
          <img src="/img/jadonSancho/Rough.gif" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Gif1;
