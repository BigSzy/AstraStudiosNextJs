import React from "react";
import Link from "next/link";
import styles from "../Styles/Project.module.scss";

import { Unbounded } from 'next/font/google'

const unbounded = Unbounded({ subsets: ['latin'] })

function Project({image, title,href}) {
  return (
    <>
      <Link href={href} className={styles.projectCard}>
        <div className={styles.imageWrapper}>
          <img src={image} alt="" />
        </div>
        <div className={styles.textWrapper}>
            <h2 className={unbounded.className}>{title}</h2>
        </div>
      </Link>
    </>
  );
}

export default Project;