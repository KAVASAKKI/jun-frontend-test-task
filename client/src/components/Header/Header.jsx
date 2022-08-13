import cx from "classnames";
import { useSelector } from "react-redux";
import { getIsStart, getIsFinish, getStartTime, getRaceTime } from "../HorseRacingStats/redux/selectors";
import { getTimeComponents } from "../../utils/getTimeComponents";
import styles from "./Header.module.css";

export const Header = () => {
  const isStart = useSelector(getIsStart);
  const isFinish = useSelector(getIsFinish);
  const startTime = useSelector(getStartTime);
  const raceTime = useSelector(getRaceTime);

  const { hours, mins, secs } = getTimeComponents(raceTime - startTime);
  const status = isStart ? "START" : isFinish ? "FINISH" : "READY";
  const time = raceTime ? `${hours}:${mins}:${secs}` : "00:00:00";

  const timeCX = cx(styles.time, {
    [styles.active]: isStart,
  });

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Horse race</h1>
      <h2 className={timeCX}>{time}</h2>
      <h2 className={styles.state}>{status}</h2>
    </header>
  );
};
