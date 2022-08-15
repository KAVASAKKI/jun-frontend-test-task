import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { useTimer } from "./useTimer";
import { updateStats, toggleIsFinish, toggleIsStart, setBet } from "../redux/horseRace/actions";
import { getIsStart } from "../redux/horseRace/selectors";

export const useHorseRace = () => {
  const { startTimer, stopTimer } = useTimer();
  const isStart = useSelector(getIsStart);
  const dispatch = useDispatch();

  const socket = io.connect("http://localhost:3002");

  const startRace = () => {
    if (isStart) return;

    dispatch(toggleIsStart(true));
    dispatch(toggleIsFinish(false));
    startTimer();

    socket.emit("start");
    socket.on("ticker", (response) => {
      const isFinish = response.every((item) => item.distance === 1000);
      const sortStats = [...response].sort((a, b) =>
        a.ftime && b.ftime ? a.ftime - b.ftime : b.distance - a.distance
      );

      dispatch(updateStats(sortStats));

      if (isFinish) {
        stopRace();
        dispatch(toggleIsFinish(isFinish));
      }
    });
  };

  const stopRace = () => {
    socket.off("ticker");
    dispatch(toggleIsStart(false));
    stopTimer();
  };

  const makeBet = (bet) => {
    dispatch(setBet(bet));
  };

  return { startRace, makeBet };
};
