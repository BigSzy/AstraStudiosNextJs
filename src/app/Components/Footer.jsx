import React from "react";
import styles from "../Styles/Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Unbounded } from 'next/font/google'

const unbounded = Unbounded({ subsets: ['latin'] })

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerRow}>
          <div className={styles.footerCol}>
            <h3 className={unbounded.className}>Alex James Smith</h3>
            <p>Astra Studios</p>
            <p>Free Lance Graphics Designer</p>
            <p>Illustrator</p>
          </div>

          <div className={styles.footerCol}>
            <div className={styles.imageWrapper}>
              <img src="/img/cover/LogoSmall.png" alt="" />
            </div>
          </div>

          <div className={styles.footerCol}>
            <div className={styles.social}>
              <a className={unbounded.className} href="https://www.youtube.com/@Astra.Studios" target="_blank">
                <FontAwesomeIcon icon={faYoutube} size="2x" fixedWidth />
              </a>
              <a className={unbounded.className} href="https://www.instagram.com/aj.astra/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="2x" fixedWidth />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.copyRight}>
          <p>
            Copyright &copy; 2023 | Astra Studios | All Rights Reserved |
            Website by SKWD
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
