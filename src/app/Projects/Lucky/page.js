import React from 'react'
import LuckyHero from './LuckyHero'
import LuckyLead from './LuckyLead'
import LuckyDisplay from './LuckyDisplay'
import LuckyDev from './LuckyDev'
import LuckyGrid from './LuckyGrid'

function Lucky() {
  return (
    <section>
      <LuckyHero/>
      <LuckyLead/>
      <LuckyDisplay image="/img/lucky/IllustratedPoses2.jpg"/>
      <LuckyDisplay image="/img/lucky/Hero.png"/>
      <LuckyDisplay image="/img/lucky/LuckyArmour.jpg"/>
      <LuckyDisplay image="/img/lucky/LuckyArmour2.jpg"/>
      <LuckyDisplay image="/img/lucky/IllustratedPoses.jpg"/>
      <LuckyDev/>
      <LuckyDisplay image="/img/lucky/StoryBoard.png"/>
      <LuckyGrid/>
      <LuckyDisplay image="/img/lucky/LuckyHero2.jpg"/>
    </section>
  )
}

export default Lucky