import React from "react";
import ContactForm from "./ContactForm";
import PageHero from "../Components/PageHero";


function Contact() {
  return (
    <section>
      <PageHero title={"Contact Us"} />
      <ContactForm />
    </section>
  );
}

export default Contact;
