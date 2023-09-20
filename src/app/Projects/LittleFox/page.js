import PageHero from '@/app/Components/PageHero'
import PageLead from '@/app/Components/PageLead'
import React from 'react'
import CharaterDisplay from './CharaterDisplay'
import SceneDisplay from './SceneDisplay'
import SketchDisplay from './SketchDisplay'

function LittleFox() {
  return (
    <section>
      <PageHero title={"The Little Fox"}/>
      <PageLead text1={"This was one of my final year projects at university, It tells  the story of a young fox intertwined with the impacts of humans on the natrual enviroment from his perspective."} text2={"The challenge was how to present it in a way or children to learn the basic principles of the impact people are having by highlighting issues such as deforrestation, melting ice caps and pollution without being to disheartening. "} text3={"The final book acts as a stepping stone for younger audiences to start a more ethical and Earth conscious mind set, But it's definitely one that needs revisiting, one that could have more impact using animation to the story."}/>
      <CharaterDisplay/>
      <SceneDisplay/>
      <SketchDisplay/>
    </section>
  )
}

export default LittleFox