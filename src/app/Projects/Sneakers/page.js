import React from 'react'
import Grid from './Grid'
import PageHero from '@/app/Components/PageHero'
import PageLead from '@/app/Components/PageLead'

function Sneakers() {
  return (
    <section>
      <PageHero title={"Sneaker Creations"}/>
        <PageLead text1={"When i first started the instagram @axel_creates (now @aj.astra) back in 2018, I was inspired by serveral digital artist, primarily Jeff Cole (@cole). I enjoyed the creative experiences of experimenting Photoshop around sneakers and charaters in an attempt to improve my skills and test the power and versatility of the tools Photoshop provides."} text2={"When undertaking this exercise I try let my imagination go and come up with unique ideas and see how the different sections of the sneakers come together in a cohesive way, retaining the visual identity of the charaters whilst emphasising key features of the shoe."} text3={"Upon client and follower request - the concepts spread to different things such as PS5 controllers and event Ben and Jerry's 'Chunky Dunky' ice cream, based of the Nike Dunks with the same name, aswell as working alognside the Remade Team to produce a Nike Air Jordan 1 with the insperation of the BMW M3 eventually turning the concept into reality. (see below)"}/>
      <Grid/>
    </section>
  )
}

export default Sneakers