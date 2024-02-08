import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import DisplayDataComponent from "../components/DisplayDataComponent";

test("renders DisplayDataComponent and checks if it displays the correct data", () => {
  const { getByText } = render(
    <Provider store={store}>
      <DisplayDataComponent />
    </Provider>
  );

  expect(getByText(/name/i)).toBeInTheDocument();
  expect(getByText(/age/i)).toBeInTheDocument();
  expect(getByText(/city/i)).toBeInTheDocument();
});
