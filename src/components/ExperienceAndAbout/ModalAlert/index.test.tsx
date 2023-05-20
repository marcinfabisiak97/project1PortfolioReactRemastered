import Modal from "./index";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import { store } from "../../../state/store";
import axios from "axios";

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
