import React from 'react'
import PageHero from '../Components/PageHero'
import AboutGrid from './AboutGrid'

function About() {
  return (
    <section>
        <PageHero title={"About Me"}/>
        <AboutGrid/>
    </section>
  )
}

export default About