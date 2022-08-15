import cx from "classnames";
import gsap from "gsap";
import { useSelector } from "react-redux";
import { useHorseRace } from "../../hooks";
import { HorseRaceStatsItem } from "./HorseRaceStatsItem";
import { getIsStart, getStats, getBet, getIsFinish } from "../../redux/horseRace/selectors";
import styles from "./HorseRaceStats.module.css";

export const HorseRaceStats = () => {
  const { startRace, makeBet } = useHorseRace();
  const bet = useSelector(getBet);
  const stats = useSelector(getStats);
  const isStart = useSelector(getIsStart);
  const isFinish = useSelector(getIsFinish);

  if (isFinish) {
    if (stats[0].name === bet) {
      console.log("You won =)");
    } else {
      console.log("You lose =(");
    }
  }

  // TODO: Нужно получить список всех лошадей, до начала забега. Но так как бекенд под это не настроeн, будем делать хардкод.
  const horses = ["Princess Diana", "Cricket", "Rebel", "Lucy", "Lacey", "Ginger"];
  const betJSX = (
    <>
      <h3 className={styles.title}>Choose a horse</h3>
      <div className={styles.horseList}>
        {horses.map((item) => {
          const horseCX = cx(styles.horseItem, {
            [styles.active]: bet === item,
          });

          return (
            <div className={horseCX} key={item} onClick={() => item !== bet && makeBet(item)}>
              {item}
            </div>
          );
        })}
      </div>
    </>
  );

  const trackerJSX = stats.map((item) => (
    <HorseRaceStatsItem item={item} key={item.name} bet={bet} />
  ));

  return (
    <div className={styles.container}>
      {!isStart && betJSX}
      {bet && trackerJSX}

      <button className={styles.startBtn} onClick={startRace} disabled={!bet || isStart}>
        Start race
      </button>
    </div>
  );
};
