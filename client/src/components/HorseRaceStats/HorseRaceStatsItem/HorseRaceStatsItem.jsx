import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHorse } from "@fortawesome/free-solid-svg-icons";
import styles from "./HorseRaceStatsItem.module.css";

export const HorseRaceStatsItem = ({ item: { name, distance }, bet }) => {
  const width = (distance * 100) / 1000;

  const horseCX = cx(styles.container, {
    [styles.active]: bet === name,
  });

  return (
    <div className={horseCX}>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.progress}>
        <div className={styles.progressBar} style={{ width: `${width}%` }}>
          <FontAwesomeIcon className={styles.icon} icon={faHorse} />
        </div>
      </div>
    </div>
  );
};
