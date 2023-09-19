import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import PageHero from "@/app/Components/PageHero";
import PageLead from "@/app/Components/PageLead";
import React from "react";
import IllustrationGrid from "./IllustrationGrid";

function Illustrations() {
  return (
    <main>
      <Header />
      <PageHero title="Illustration" />
      <PageLead text1="Back in 2018 I decided to teach myself Adobe Illustrator and haven't looked back since. I started an Instagram account to help support my learning as well as hold myself accountable to the learning process, I've created a libary of vector based artwork, working in different styles and gone on to apply this to various project including client cover art, animations, digital assets and my own personal work." />
      <IllustrationGrid />
      <Footer />
    </main>
  );
}

export default Illustrations;
