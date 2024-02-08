import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import NameComponent from "../components/NameComponent";

test("renders NameComponent and checks if the change event updates the value", () => {
  const { getByLabelText } = render(
    <Provider store={store}>
      <NameComponent />
    </Provider>
  );

  const input = getByLabelText(/name/i);
  fireEvent.change(input, { target: { value: "John" } });
  expect(input.value).toBe("John");
});
