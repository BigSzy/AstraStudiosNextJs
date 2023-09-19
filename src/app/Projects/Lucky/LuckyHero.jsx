import React from 'react'
import styles from './LuckyHero.module.scss'

function LuckyHero() {
  return (
    <div className='container'>
        <div className={styles.videoWrapper}>
            <iframe src="https://www.youtube.com/embed/MMI6406zYx4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    </div>
  )
}

export default LuckyHero