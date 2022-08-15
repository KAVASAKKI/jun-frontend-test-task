import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Header } from "../components";

test("Should render Header component", () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
});
