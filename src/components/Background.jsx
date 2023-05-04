import background from "../img/bg-1.jpg";
import styles from "./Background.module.scss";

const Background = () => {
  return (
    <div
      className={styles.background}
      style={{ backgroundImage: `url(${background})` }}
    ></div>
  );
};

export default Background;
