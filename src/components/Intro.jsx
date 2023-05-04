import kathy from "../img/kathy.PNG";
import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hello}>
        <p className={styles.intro}>
          Hi,
          <br /> I'm
          <br /> Kathy.
        </p>
      </div>
      <div className={styles.bio}>
        <p className={styles.description}>
          I’m an experienced world traveler who constantly challenges myself to
          live outside my comfort zone. I’m also a front end web developer
          that’s driven to perform in both individual and collaborative settings
          in order further develop my skills for the purpose of creating a more
          accessible online experience.
        </p>
      </div>
      {/* <img className={styles.kathy} src={kathy} /> */}
    </div>
  );
};

export default Intro;
