import aurora from "../img/aurora.webp";
import climate from "../img/climate.webp";
import forkify from "../img/forkify.webp";
import trillo from "../img/trillo.webp";
import natours from "../img/natours.webp";
import omnifood from "../img/omnifood.webp";
import styles from "./Projects.module.scss";
import projectInfo from "../constants/projectInfo";
import { useState } from "react";

const Projects = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [par1, setPar1] = useState("");

  const clickHandler = (event) => {
    const id = event.target.id;
    const title = projectInfo.projectInfo[id].title;
    const date = projectInfo.projectInfo[id].date;
    const par = projectInfo.projectInfo[id].par1;
    setShowDescription(true);
    setTitle(title);
    setDate(date);
    setPar1(par);
  };

  return (
    <div>
      <div className={styles.heading}>
        <div className={styles.projects}>projects.</div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.container}>
        {!showDescription && (
          <div className={styles.text}>
            <p className={styles.title}>Click on the projects to learn more.</p>
          </div>
        )}
        {showDescription && (
          <div className={styles.text}>
            <p className={styles.title}>{title}</p>
            <p className={styles.date}>{date}</p>
            <p className={styles.description}>{par1}</p>
          </div>
        )}
        <div className={styles.images}>
          <div className={styles["images-container"]}>
            <div className={styles["image-container"]}>
              <img
                className={styles.image}
                src={climate}
                alt="Aurora"
                onClick={clickHandler}
                id="0"
              />
              <p className={styles.desc}>
                01. What will be your cause of death?
              </p>
            </div>
            <div className={styles["image-container"]}>
              <img
                className={styles.image}
                src={aurora}
                alt="Aurora"
                onClick={clickHandler}
                id="1"
              />
              <p className={styles.desc}>02. Auroramålet</p>
            </div>
            <div className={styles["image-container"]}>
              <img
                className={styles.image}
                src={forkify}
                alt="Aurora"
                onClick={clickHandler}
                id="2"
              />
              <p className={styles.desc}>03. Forkify</p>
            </div>
            <div className={styles["image-container"]}>
              <img
                className={styles.image}
                src={trillo}
                alt="Aurora"
                onClick={clickHandler}
                id="3"
              />
              <p className={styles.desc}>04. Omnifood</p>
            </div>
            <div className={styles["image-container"]}>
              <img
                className={styles.image}
                src={omnifood}
                alt="Aurora"
                onClick={clickHandler}
                id="4"
              />
              <p className={styles.desc}>05. Natours</p>
            </div>
            <div className={styles["image-container"]}>
              <img
                className={styles.image}
                src={trillo}
                alt="Aurora"
                onClick={clickHandler}
                id="5"
              />
              <p className={styles.desc}>06. Trillo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
