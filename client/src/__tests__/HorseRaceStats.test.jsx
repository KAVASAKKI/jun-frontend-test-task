import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { HorseRaceStats } from "../components";

test("Should render HorseRaceStats component", () => {
  render(
    <Provider store={store}>
      <HorseRaceStats />
    </Provider>
  );

  const button = screen.getByTestId("button");
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("Start race");

  const notify = screen.getByTestId("notify");
  expect(notify).toBeInTheDocument();
  expect(notify).toHaveTextContent("You won!" && "You lose!");
  expect(notify).toHaveStyle("color: green" && "color: red");
});
