import React from "react";
import PageHero from "@/app/Components/PageHero";
import PageLead from "@/app/Components/PageLead";
import Gif1 from "./Gif1";
import Grid3x from "./Grid3x";


function Jadon() {
  return (
    <section>
      <PageHero title={"Jadon Sancho Animation"} />
      <PageLead
        text1={
          "When Sancho signed for Manchester United after a highly anticipated summer transfer window the year before. I had already created an illustration for the move. Off the back of that i created a short transfer announcement animation."
        }
        text2={
          "The illustration was in the style of Stanley Chow. Style studies I've found are a great way to learn different artists idiosyncracies within their work, create my own spin off and apply similar techniques in my own work."
        }
      />
      <Gif1/>
      <Grid3x/>
    </section>
  );
}

export default Jadon;
