"use client";

import React from "react";
import styles from "./ContactForm.module.scss";
import { useRef } from "react";
import { Dosis } from "next/font/google";

const dosis = Dosis({ subsets: ["latin"] });

function ContactForm() {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const mobile = useRef();
  const message = useRef();

  function submit(event) {
    console.log(
      firstName.current.value,
      lastName.current.value,
      email.current.value,
      mobile.current.value,
      message.current.value
    );
    console.log("hello");
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

        <div className={styles.email}>
          <span>Email:</span>
          <input className={dosis.className} type="email" ref={email} />
        </div>

        <div className={styles.mobile}>
          <span>Phone Number:</span>
          <input className={dosis.className} type="text" ref={mobile} />
        </div>

        <div className={styles.message}>
          <span>Your Message....</span>
          <textarea className={dosis.className} ref={message}></textarea>
        </div>

        <div className={styles.submit}>
          <input className={dosis.className} type="submit"></input>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
