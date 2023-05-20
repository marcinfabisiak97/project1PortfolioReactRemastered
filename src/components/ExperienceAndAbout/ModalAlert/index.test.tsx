import Modal from "./index";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { store } from "../../../state/store";

jest.mock("axios");

test("renders modal", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Modal />
    </Provider>
  );

  expect(
    getByText("Do you really want to download my CV?")
  ).toBeInTheDocument();
});
