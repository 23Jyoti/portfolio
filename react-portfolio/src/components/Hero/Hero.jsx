import React from "react";
import styles from "./Hero.module.css";

import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jyoti</h1>
        <p className={styles.description}>
          A passionate engineering student exploring the world of technology and
          continuously learning new skills.
        </p>

        <a href="mailto:23jyotigaud@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Profile Image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
