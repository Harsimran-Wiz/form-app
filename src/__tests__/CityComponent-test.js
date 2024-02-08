import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import CityComponent from "../components/CityComponent";

test("renders CityComponent and checks if the change event updates the value", () => {
  const { getByLabelText } = render(
    <Provider store={store}>
      <CityComponent />
    </Provider>
  );

  const input = getByLabelText(/city/i);
  fireEvent.change(input, { target: { value: "New York" } });
  expect(input.value).toBe("New York");
});
