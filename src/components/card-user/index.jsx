/* eslint-disable react/prop-types */
import styles from "./cardUser.module.scss";

export default function CardUser({ user, handleNavigate, onDelete }) {
  return (
    <div className={styles.cardUser}>
      <div className={styles.cardUser__wrapper}>
        <div className={styles.cardUser__title}>
          <h2>{user?.provider}</h2>
        </div>
        <div>
          <p>{user?.email}</p>
          <span>{user?.category}</span>
        </div>
      </div>
      <div className={styles.cardUser__btnContainer}>
        <p onClick={() => handleNavigate(user?.id)} className={styles.cardUser__btn}>
          Detail Provider
        </p>
        <p onClick={() => onDelete(user?.id)} className={styles.cardUser__btnDelete}>
          Delete
        </p>
      </div>
    </div>
  );
}
