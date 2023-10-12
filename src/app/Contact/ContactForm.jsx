"use client";

import React from "react";
import styles from "./ContactForm.module.scss";
import { useRef } from "react";
import { Dosis } from "next/font/google";
import ReCAPTCHA from "react-google-recaptcha";

const dosis = Dosis({ subsets: ["latin"] });

function ContactForm() {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const mobile = useRef();
  const message = useRef();
  const subject = useRef();
  const reRef = useRef();
  const SITE_KEY = "6LcuxpcoAAAAAFie14a4q7wpbQoQTPd3x-o5KiO9"

  async function submit(event) {

    console.log("Submitting...")

    const token  = await reRef.current.getValue()

    const body = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      mobile: mobile.current.value,
      message: message.current.value,
      subject: subject.current.value,
      token,
    };

    console.log(body)

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    console.log(data);
  }

  return (
    <div className={styles.contactWrapper}>
      <form onSubmit={submit}>
        <div className={styles.name}>
          <div className={styles.firstName}>
            <span>First Name:</span>
            <input type="text" className={dosis.className} ref={firstName} />
          </div>

          <div className={styles.lastName}>
            <span>Last Name:</span>
            <input className={dosis.className} type="text" ref={lastName} />
          </div>
        </div>

        <div className={styles.mobile}>
          <span>Phone Number:</span>
          <input className={dosis.className} type="text" ref={mobile} />
        </div>

        <div className={styles.email}>
          <span>Email:</span>
          <input className={dosis.className} type="email" ref={email} />
        </div>

        <div className={styles.email}>
          <span>Subject:</span>
          <input className={dosis.className} type="text" ref={subject} />
        </div>

        <div className={styles.message}>
          <span>Your Message....</span>
          <textarea className={dosis.className} ref={message}></textarea>
        </div>

        <ReCAPTCHA sitekey={SITE_KEY} ref={reRef} />

        <div className={styles.submit}>
          <input className={dosis.className} type="submit"></input>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
