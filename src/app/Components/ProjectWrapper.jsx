import React from "react";
import styles from "../Styles/Project.module.scss";
import Project from "./Project";

function ProjectWrapper() {
  return (
    <div className="container">
      <div className={styles.projectWrapper}>
        <Project
          image="/img/cover/LuckyProjectCover.png"
          title="Alias : Lucky"
          href="/Projects/Lucky"
        />
        <Project
          image="/img/cover/PortraitCover.png"
          title="Portrait Drawings"
          href="/Projects/Portraits"
        />
        <Project
          image="/img/cover/MusicCover.png"
          title="Cover Art"
          href="/Projects/CoverArt"
        />
        <Project
          image="/img/cover/IllustrationCover.png"
          title="Illustrations"
          href="/Projects/Illustrations"
        />
        <Project
          image="/img/cover/LittleFoxCover.png"
          title="The Little Fox"
          href="/Projects/LittleFox"
        />
        <Project
          image="/img/cover/MashUpCover.png"
          title="Sneaker Creations"
          href="/Projects/Sneakers"
        />
        <Project
          image="/img/cover/PosterCover.png"
          title="Sports Graphics"
          href="/Projects/SportsGraphics"
        />
        <Project
          image="/img/cover/JSanchoCover.png"
          title="Jadon Sancho Animation"
          href="/Projects/Jadon"
        />
        <Project
          image="/img/cover/EidasCover.png"
          title="iPROOV"
          href="/Projects/Iproov"
        />
        <Project
          image="/img/cover/TehilaTrustCover.png"
          title="Tehila Trust Project"
          href="/Projects/Tehila"
        />

        <Project
          image="/img/cover/NominetCover.png"
          title="Nominet Project"
          href="/Projects/Nominet"
        />
      </div>
    </div>
  );
}

export default ProjectWrapper;
