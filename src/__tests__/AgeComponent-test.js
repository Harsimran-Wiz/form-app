import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import AgeComponent from "../components/AgeComponent";

test("renders AgeComponent and checks if the change event updates the value", () => {
  const { getByLabelText } = render(
    <Provider store={store}>
      <AgeComponent />
    </Provider>
  );

  const input = getByLabelText(/age/i);
  fireEvent.change(input, { target: { value: "30" } });
  expect(input.value).toBe("30");
});
