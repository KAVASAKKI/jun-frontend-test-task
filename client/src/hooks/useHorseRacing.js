import io from "socket.io-client";
import _ from "lodash";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTimer } from "./useTimer";
import { updateStats, toggleIsFinish, toggleIsStart, setStartTime, updateRaceTime } from "../components/HorseRacingStats/redux/actions";
import { getIsStart } from "../components/HorseRacingStats/redux/selectors";
import { now } from "../utils/getTimeComponents";

export const useHorseRacing = (url) => {
  const socket = io.connect(url);
  const dispatch = useDispatch();
  const { startTimer, stopTimer } = useTimer();
  const isStart = useSelector((state) => getIsStart(state));

  const startRace = () => {
    if (isStart) return;

    dispatch(updateRaceTime(0));
    dispatch(setStartTime(now()));
    startTimer();
    dispatch(toggleIsStart(true));
    socket.emit("start");
  };

  const stopRace = useCallback(() => {
    stopTimer();
    dispatch(toggleIsStart(false));
    socket.off("ticker");
  }, [dispatch, socket, stopTimer]);

  useEffect(() => {
    socket.on("ticker", (response) => {
      const finished = response.filter((item) => item.distance === 1000);
      const isFinish = response.every((item) => item.distance === 1000);
      const sortHorses = _.unionBy(finished, response, "name");
      dispatch(updateStats(sortHorses));

      console.log("sortHorses", sortHorses);

      if (isFinish) {
        stopRace();
        dispatch(toggleIsFinish(isFinish));
      }
    });
  }, [dispatch, socket, stopRace]);

  return { startRace };
};
