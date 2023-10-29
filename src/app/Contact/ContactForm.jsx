"use client";

import React from "react";
import styles from "./ContactForm.module.scss";
import { useRef } from "react";
import { Dosis } from "next/font/google";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm, SubmitHandler } from "react-hook-form";

const dosis = Dosis({ subsets: ["latin"] });

function ContactForm() {
  const reRef = useRef();
  const SITE_KEY = "6LcuxpcoAAAAAFie14a4q7wpbQoQTPd3x-o5KiO9";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function submit(data) {
    console.log("Submitting...");
    console.log(data);

    const token = await reRef.current.getValue();

    const body = {
      ...data,
      token,
    };

    console.log(body);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const ret = await response.json();

    console.log(ret);
  }

  return (
    <div className={styles.contactWrapper}>
      <form onSubmit={handleSubmit(submit)}>
        <div className={styles.name}>
          <div className={styles.firstName}>
            <span>First Name:</span>
            <input
              {...register("firstName", { required: true })}
              type="text"
              className={dosis.className}
       
            />
            {errors.firstName?.type === "required" && (
              <p className={styles.required} role="alert">
                First name is required
              </p>
            )}
          </div>

          <div className={styles.lastName}>
            <span>Last Name:</span>
            <input
              {...register("lastName", { required: true })}
              className={dosis.className}
              type="text"
          
            />
            {errors.lastName?.type === "required" && (
              <p className={styles.required} role="alert">
                Last name is required
              </p>
            )}
          </div>
        </div>

        <div className={styles.mobile}>
          <span>Phone Number:</span>
          <input
            {...register("mobile", { required: true })}
            className={dosis.className}
            type="text"
         
          />
          {errors.mobile?.type === "required" && (
            <p className={styles.required} role="alert">
              Phone number is required
            </p>
          )}
        </div>

        <div className={styles.email}>
          <span>Email:</span>
          <input
            {...register("email", { required: true })}
            className={dosis.className}
            type="email"
        
          />
          {errors.email?.type === "required" && (
            <p className={styles.required} role="alert">
              Email Address is required
            </p>
          )}
        </div>

        <div className={styles.email}>
          <span>Subject:</span>
          <input
            {...register("subject", { required: true })}
            className={dosis.className}
            type="text"
        
          />
          {errors.subject?.type === "required" && (
            <p className={styles.required} role="alert">
              Subject is required
            </p>
          )}
        </div>

        <div className={styles.message}>
          <span>Your Message....</span>
          <textarea
            {...register("message", { required: true })}
            className={dosis.className}
        
          ></textarea>
          {errors.message?.type === "required" && (
            <p className={styles.required} role="alert">
              Message is required
            </p>
          )}
        </div>

        <div className={styles.submit}>
          <input className={dosis.className} type="submit"></input>
        </div>

        <ReCAPTCHA sitekey={SITE_KEY} ref={reRef} />

      </form>
    </div>
  );
}

export default ContactForm;
