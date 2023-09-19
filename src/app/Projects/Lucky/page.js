import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
import React from 'react'
import LuckyHero from './LuckyHero'
import LuckyLead from './LuckyLead'
import LuckyDisplay from './LuckyDisplay'
import LuckyDev from './LuckyDev'
import LuckyGrid from './LuckyGrid'

function Lucky() {
  return (
    <main>
      <Header/>
      <LuckyHero/>
      <LuckyLead/>
      <LuckyDisplay image="/img/lucky/LuckyArmour.jpg"/>
      <LuckyDisplay image="/img/lucky/LuckyArmour2.jpg"/>
      <LuckyDisplay image="/img/lucky/IllustratedPoses.jpg"/>
      <LuckyDisplay image="/img/lucky/IllustratedPoses2.jpg"/>
      <LuckyDisplay image="/img/lucky/Hero.png"/>
      <LuckyDev/>
      <LuckyDisplay image="/img/lucky/StoryBoard.png"/>
      <LuckyGrid/>
      <LuckyDisplay image="/img/lucky/LuckyHero2.jpg"/>
      <Footer/>
    </main>
  )
}

export default Lucky