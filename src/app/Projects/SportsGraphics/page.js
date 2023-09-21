import React from "react";
import PageHero from "@/app/Components/PageHero";
import PageLead from "@/app/Components/PageLead";
import Grid2x from "./Grid2x";

function SportsGrpahics() {
  return (
    <section>
      <PageHero title={"Sports Graphics"} />
      <PageLead
        text1={
          "Created in my own time or for commission, combing intrests in the creation of projects is a nice balance to have."
        }
        text2={
          "These sort of projects where you can bring passsions together are the ones that I want to be able to be part of more often to deliver bigger, better and more exciting outcomes whether it be grpahic design or animation"
        }
      />
      <Grid2x/>
    </section>
  );
}

export default SportsGrpahics;
