import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>

      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Illustration of me working on a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                As a frontend developer, I enjoy transforming ideas into
                interactive and dynamic web applications. I focus on clean code,
                responsive design, and enhancing user experience through
                efficient UI development
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
