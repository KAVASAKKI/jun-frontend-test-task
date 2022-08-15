import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import cx from "classnames";
import { useHorseRace, useAnimation } from "../../hooks";
import { HorseRaceStatsItem } from "./HorseRaceStatsItem";
import { getIsStart, getStats, getBet, getIsFinish } from "../../redux/horseRace/selectors";
import styles from "./HorseRaceStats.module.css";

export const HorseRaceStats = () => {
  const [isWon, setWon] = useState(false);
  const { notifyAnimation } = useAnimation();
  const { startRace, makeBet } = useHorseRace();
  const isFinish = useSelector(getIsFinish);
  const isStart = useSelector(getIsStart);
  const stats = useSelector(getStats);
  const bet = useSelector(getBet);
  const ref = useRef(null);

  useEffect(() => {
    if (isFinish) {
      setWon(stats[0].name === bet);
      notifyAnimation(ref);
    }
  }, [bet, isFinish, notifyAnimation, stats]);

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

      <h3 className={styles.notify} style={{ color: isWon ? "green" : "red" }} ref={ref}>
        {isWon ? "You won!" : "You lose!"}
      </h3>
    </div>
  );
};
