import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHorse } from "@fortawesome/free-solid-svg-icons";
import styles from "./HorseRacingStatsItem.module.css";

export const HorseRacingStatsItem = ({ item: { name, distance } }) => {
  const width = (distance * 100) / 1000;
  //   const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <div className={styles.container}>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.progress}>
        <div className={styles.progressBar} style={{ width: `${width}%` }}>
          <FontAwesomeIcon className={styles.icon} icon={faHorse} />
        </div>
      </div>
    </div>
  );
};
