import kathy from "../img/kathy.PNG";
import styles from "./Kathy.module.scss";
import { useState } from "react";

const Kathy = () => {
  return (
    <div className={styles.container}>
      <img className={styles.kathy} src={kathy} alt="kathy" />
    </div>
  );
};

export default Kathy;
