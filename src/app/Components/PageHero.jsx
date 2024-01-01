import React from "react";
import styles from "../Styles/PageHero.module.scss";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"] });

function PageHero({ title }) {
  return (
    <div>
      <div className="container">
        <div className={styles.HeroWrapper}>
          <div className={styles.textWrapper}>
            <h1 className={unbounded.className}>{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHero;
