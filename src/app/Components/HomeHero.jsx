import React from 'react'
import styles from "../Styles/HomeHero.module.scss";



function HomeHero() {
  return (
    <div className="container">
      <div className={styles.HeroWrapper}>
        <div className={styles.imageWrapper}>
          <img src="/img/cover/LogoLarge.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomeHero