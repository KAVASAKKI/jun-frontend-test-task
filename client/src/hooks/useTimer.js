import { useRef } from "react";
import { batch, useDispatch } from "react-redux";
import { updateRaceTime, setStartTime } from "../redux/horseRace/actions";
import { now } from "../utils/getTimeComponents";

export const useTimer = () => {
  const dispatch = useDispatch();
  const timerRef = useRef(null);

  const startTimer = () => {
    batch(() => {
      dispatch(updateRaceTime(0));
      dispatch(setStartTime(now()));
    });

    timerRef.current = setInterval(() => {
      dispatch(updateRaceTime(now()));
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  return { startTimer, stopTimer };
};
