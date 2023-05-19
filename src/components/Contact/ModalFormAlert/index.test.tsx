import { render, screen } from "@testing-library/react";
import ModalForm from "./index";
import { Provider } from "react-redux";
import { store } from "../../../state/store";

describe("ModalForm", () => {
  test("should render with the email received from state", () => {
    const email = "marcinfabisiak123@gmail.com";
    render(
      <Provider store={store}>
        <ModalForm />
      </Provider>
    );
    const modal = screen.getByRole("modalForm");
    store.dispatch({
      type: "formModal/open",
      payload: {
        email,
      },
    });
    const closeModalBtn = screen.getByText("X");
    const okBtn = screen.getByText("Ok");
    const emailText = screen.getByText(`An email has been sent to ${email}`);
    expect(modal).toBeInTheDocument();
    expect(closeModalBtn).toBeInTheDocument();
    expect(okBtn).toBeInTheDocument();
    expect(emailText).toBeInTheDocument();
  });
});
