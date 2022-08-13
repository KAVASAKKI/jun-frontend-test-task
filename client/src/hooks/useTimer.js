import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateRaceTime } from "../components/HorseRacingStats/redux/actions";
import { now } from "../utils/getTimeComponents";

export const useTimer = () => {
  const dispatch = useDispatch();
  const timerRef = useRef(null);

  const startTimer = () => {
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
