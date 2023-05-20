import { render, fireEvent } from "@testing-library/react";
import ButtonsCopyAndDownload from "./index";
import { copyEmail } from "../../Utils";
import { Provider } from "react-redux";
import { store } from "../../../state/store";
jest.mock("../../Utils", () => ({
  copyEmail: jest.fn(),
}));

describe("ButtonsCopyAndDownload", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("calls copyEmail function when copy button is clicked", () => {
    const { getByText } = render(
      <Provider store={store}>
        <ButtonsCopyAndDownload />
      </Provider>
    );
    const copyButton = getByText("Copy e-mail");

    fireEvent.click(copyButton);

    expect(copyEmail).toHaveBeenCalledTimes(1);
  });
});
