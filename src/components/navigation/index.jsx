/* eslint-disable react/prop-types */
import styles from "./navigation.module.scss";

export default function Navigation({ handleOpen }) {
  return (
    <div className={styles.navigation}>
      <h1 className={styles.logo}>Password Manager</h1>
      <div>
        <button className={styles.btn} onClick={() => handleOpen()}>
          Add Provider
        </button>
      </div>
    </div>
  );
}
