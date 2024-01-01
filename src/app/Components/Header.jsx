"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "../Styles/Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"] });

function Header() {
  const [toggle, setToggle] = useState(false);
  const mobileLinks = useRef();

  useEffect(() => {
    if (toggle) {
      mobileLinks.current.style = "display:flex;";
    } else {
      mobileLinks.current.style = "display:none;";
    }
  });

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navbarWrapper}>
          <div className={styles.leftSide}>
            <img src="/img/cover/LogoSmall.png" alt="" />
            <Link href="/">
              <h2 className={unbounded.className}>Astra Studios</h2>
            </Link>
          </div>

          <div className={styles.rightSide}>
            <div className={styles.navLinks}>
              <Link href="/" className={unbounded.className}>
                Home
              </Link>
              <Link href="/About" className={unbounded.className}>
                About
              </Link>
              <Link href="/Contact" className={unbounded.className}>
                Contact
              </Link>
            </div>
            <button onClick={() => setToggle((toggle) => !toggle)}>
              <FontAwesomeIcon icon={faBars} size="3x" />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.mobileLinks} ref={mobileLinks}>
        <Link href="/" className={unbounded.className}>
          Home
        </Link>
        <Link href="/About" className={unbounded.className}>
          About
        </Link>
        <Link href="/Contact" className={unbounded.className}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Header;
