import React from 'react'
import styles from './LuckyLead.module.scss'
import { Unbounded } from 'next/font/google'

const unbounded = Unbounded({ subsets: ['latin'] })

function LuckyLead() {
  return (
    <div className="container">
    <div className={styles.leadWrapperMobile}>
      <div className={styles.textWrapperMobile}>
        <h1 className={unbounded.className}>ALIAS : LUCKY</h1>
        <p>
          A project thats still in it&apos;s nascent stages. This OC came
          about from an idea about the Easter Bunny believe it or not,
          blossomed into existence.
        </p>

        <p>
          Whe is he a rabbit? where did he come from? What&apos;s his real
          name and why does he scowl 80% of the time? Nobody knows, but he
          means buiness.
        </p>

        <p>
          In all seriousness I have a few backstories that could work and
          it&apos;s been a rewarding exploration of character design and world
          building, culminating in my first bit of fxf storytelling. A little
          rough round the edges just like Lucky - I&apos;ve still got plenty
          to learn when it comes to animation.
        </p>
      </div>
      <div className={styles.wholeImageWrapperMobile}>
        <div className={styles.imageWrapperMobile}>
          <img src="/img/lucky/LuckyFront.png" alt="" />
        </div>
        <div className={styles.imageWrapperMobile}>
          <img src="/img/lucky/LuckyBack.png" alt="" />
        </div>
      </div>
    </div>

    <div className={styles.leadWrapper}>
      <div className={styles.imageWrapper}>
        <img src="/img/lucky/LuckyFront.png" alt="" />
      </div>
      <div className={styles.textWrapper}>
        <h1 className={unbounded.className}>ALIAS : LUCKY</h1>
        <p>
          A project thats still in it&apos;s nascent stages. This OC came
          about from an idea about the Easter Bunny believe it or not,
          blossomed into existence.
        </p>

        <p>
          Whe is he a rabbit? where did he come from? What&apos;s his real
          name and why does he scowl 80% of the time? Nobody knows, but he
          means buiness.
        </p>

        <p>
          In all seriousness I have a few backstories that could work and
          it&apos;s been a rewarding exploration of character design and world
          building, culminating in my first bit of fxf storytelling. A little
          rough round the edges just like Lucky - I&apos;ve still got plenty
          to learn when it comes to animation.
        </p>
      </div>
      <div className={styles.imageWrapper}>
        <img src="/img/lucky/LuckyBack.png" alt="" />
      </div>
    </div>
  </div>
  )
}

export default LuckyLead