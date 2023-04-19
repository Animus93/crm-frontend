import styles from "./serchBlok.module.css";

function SerchBlok() {
  return (
    <div className={styles.content}>
      <div className={styles.inputWrapper}>
        <div className={styles.icon}></div>
        <div
          className={styles.input}
          type="text"
          placeholder="Enter your name"
          data-placeholder="Message"
          contentEditable="true"
        ></div>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.img}></div>
        <div className={styles.text}>
          <p className={styles.userName}>Name</p>
          <p className={styles.userTitle}>Managing Director</p>
        </div>
      </div>
    </div>
  );
}

export default SerchBlok;
