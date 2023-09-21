import React from "react";
import PageHero from "@/app/Components/PageHero";
import PageLead from "@/app/Components/PageLead";
import Grid1 from "./Grid1";
import Grid2 from "./Grid2";

function Nominet() {
  return (
    <section>
      <PageHero title={"Nominet - the power of dot brand"} />
      <PageLead
        text1={
          "This was one of the first times I had the responsibility of story boarding and illustration for this project. The client asks us to create 4 use cases scenarios to encapsulate the power of dot brand."
        }
        text2={
          "We had a core character - Rodney who appears in all 4 videos in various context. We had to highlight key benefits of dotbrand domain and also ensure consistancy across all 4 videos. We had to combat tight deadlines and the scope creep during the course of this project - always a fun challenge."
        }
        text3={
          "Alongside the 4 use case animation was a 3D virtual experience."
        }
      />
      <Grid1/>
      <Grid2/>
    </section>
  );
}

export default Nominet;
