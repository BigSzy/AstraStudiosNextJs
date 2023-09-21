import React from "react";
import PageHero from "@/app/Components/PageHero";
import PageLead from "@/app/Components/PageLead";
import Grid2x from "./Grid2x";
import Grid3x from "./Grid3x";


function Iproov() {
  return (
    <section>
      <PageHero title={"iPROOV - Electronic ID animation"} />
      <PageLead
        text1={
          "For this porject the team and I were tasked with creating new style and identity for the company to demonstrate their proprietary technology - a digital ID system which allowed their verification of official documents."
        }
        text2={
          "I headed up with storyboarding and initial design for the animation. I was in charge of establishing a clear style to take forward to the illustration stage wgich i was also involved in."
        }
      />
      <Grid2x/>
      <Grid3x/>
    </section>
  );
}

export default Iproov;
