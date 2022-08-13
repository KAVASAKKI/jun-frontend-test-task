import { useSelector } from "react-redux";
import { useHorseRacing } from "../../hooks/useHorseRacing";
import { HorseRacingStatsItem } from "./components/HorseRacingStatsItem";
import { getStats, getIsStart } from "./redux/selectors";
import styles from "./HorseRacingStats.module.css";

export const HorseRacingStats = () => {
  const { startRace } = useHorseRacing("http://localhost:3002");
  const stats = useSelector(getStats);
  const isStart = useSelector(getIsStart);

  return (
    <div className={styles.container}>
      {/* <button onClick={stopRacing}>stopRacing</button> */}

      {stats.map((item) => (
        <HorseRacingStatsItem item={item} key={item.name} />
      ))}

      <button className={styles.startBtn} onClick={startRace} disabled={isStart}>
        Start race
      </button>
    </div>
  );
};
