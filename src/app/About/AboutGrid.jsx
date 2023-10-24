import React from "react";
import styles from "./AboutGrid.module.scss";

function AboutGrid() {
  return (
    <div className="container">
      <div className={styles.gridWrapper}>
        <div className={styles.gridText}>
          <p>Hello!</p>
          <p>I'm AJ Smith,</p>
          <p>
            I design stuff, sometimes I draw, but mostly I help visualise
            peoples creative projects and bring these ideas to life.
          </p>
          <p>
            I have a background in product design although I focus much more on
            the illustration and graphics side of things now. Currently trying
            to find my way through some more animation techniques.
          </p>
          <p>
            Anyways take a look around this small corner of the internet and
            feel free to get in touch ! I’m always open to collaborations and
            new projects.
          </p>
        </div>

        <div className={styles.gridImage}>
          <img src="/img/cover/AJSmith.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutGrid;
