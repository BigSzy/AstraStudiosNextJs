import PageHero from "@/app/Components/PageHero";
import PageLead from "@/app/Components/PageLead";
import React from "react";
import Grid from "./Grid";

function Portraits() {
  return (
    <section>
      <PageHero title="Portraits - Traditional graphite drawing" />
      <PageLead
        text1="Whether it's early morning on a summers day,  with the birds singing their morning songs or late at night with just my thoughts for accompaniment, I find myself revisiting portraiture when time allows. "
        text2="After studying Industrial Design at university it's always an enjyoablee time spending hours with my sketchpad a 2B, 4B and 8B pencils drawing and sketching."
        text3="There's something about tactile experience and irreversibilty of traditional medium that sets it apart from digital art."
      />
      <Grid />
    </section>
  );
}

export default Portraits;
