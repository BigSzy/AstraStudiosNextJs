import React from "react";
import styles from "../Styles/Project.module.scss";
import Project from "./Project";

function ProjectWrapper() {
  return (
    <div className="container">
      <div className={styles.projectWrapper}>
        <Project
          image="/img/cover/LuckyProjectCover.jpg"
          title="Alias : Lucky"
          href="/Projects/Lucky"
        />
        <Project
          image="/img/cover/PortraitCover.jpg"
          title="Portrait Drawings"
          href="/Projects/Portraits"
        />
        <Project
          image="/img/cover/MusicCover.jpg"
          title="Cover Art"
          href="/Projects/CoverArt"
        />
        <Project
          image="/img/cover/IllustrationCover.jpg"
          title="Illustrations"
          href="/Projects/Illustrations"
        />
        <Project
          image="/img/cover/MashUpCover.jpg"
          title="Sneaker Creations"
          href="/Projects/Sneakers"
        />
        <Project
          image="/img/cover/PosterCover.jpg"
          title="Sports Graphics"
          href="/Projects/SportsGraphics"
        />
        <Project
          image="/img/cover/JSanchoCover.jpg"
          title="Jadon Sancho Animation"
          href="/Projects/Jadon"
        />
        <Project
          image="/img/cover/TehilaTrustCover.jpg"
          title="Tehila Trust Project"
          href="/Projects/Tehila"
        />
      </div>
    </div>
  );
}

export default ProjectWrapper;
