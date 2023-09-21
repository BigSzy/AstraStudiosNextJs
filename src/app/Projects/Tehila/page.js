import React from "react";
import PageHero from "@/app/Components/PageHero";
import PageLead from "@/app/Components/PageLead";
import SketchGrid from "./SketchGrid";
import IllustrationGrid from "./IllustrationGrid";
import GifGrid from "./GifGrid";


function Tehila() {
  return (
    <section>
      <PageHero title={"Tehila Trust - Storyboarding and Illustration"} />
      <PageLead
        text1={
          "Tehila is a local and leading child safeguarding organisation in Zambia. They colabrate with the communities and child-focused organisations to create safer enviroments for children."
        }
        text2={
          "We were tasked with creating an animation highlighting the importace of their work. We used motifs of darkness and shadows contrasting with light, subtle refrences to rebirth using butterfly symbolism and also animated on 3's to add to the rustic hand drawn element and overall atmosphere of the whole animation."
        }
        text3={
          "I realised from this project that that it would be great to work on some more action packed projects where I can really delve into storyboarding process and explore more dynamic options and scenes."
        }
      />
      <SketchGrid/>
      <IllustrationGrid/>
      <GifGrid/>
    </section>
  );
}

export default Tehila;
