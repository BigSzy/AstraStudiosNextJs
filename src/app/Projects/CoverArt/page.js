import React from "react";
import Grid from "./Grid";
import PageHero from "@/app/Components/PageHero";
import PageLead from "@/app/Components/PageLead";

function CoverArt() {
  return (
    <section>
      <PageHero title={"Music Cover Art"} />
      <PageLead
        text1={
          "Developing the clients own thoughts and idea is paramount to creating meaningful cover art. The clients own imagination and ideas should be at the heart of the cover art. It's my job to communicate the clients ideas into a coherent visually engaging piece."
        }
        text2={
          "The combination of Illustartor and Photoshop, along with visual metaphors that represent lyrcis in the song make it possible to convey each project in it's own unique way and bring covers to life"
        }
      />
      <Grid />
    </section>
  );
}

export default CoverArt;
