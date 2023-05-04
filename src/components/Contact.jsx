import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div>
      <div className={styles.heading}>
        <div className={styles.title}>get in touch.</div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.blurb}>
          <p className={styles.pitch}>
            I'm always looking for new opportunities to expand my skill set.
            Please don't be shy to reach out for any type of collaboration.{" "}
            <br />
            <br />
            And if you're looking for an intern, look no further!
          </p>
        </div>
        <div className={styles.email}>
          <p className={styles.contact}>
            <a href="mailto: kathyhahoang@gmail.com">kathyhahoang@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
