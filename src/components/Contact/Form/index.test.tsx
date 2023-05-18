import Form from "./index";
import { Provider } from "react-redux";
import { store } from "../../../state/store";
import { render, screen } from "@testing-library/react";

describe("Form component", () => {
  test("should render the form component", () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    expect(screen.getByText("// Contact me")).toBeInTheDocument();
    expect(
      screen.getByText(
        "If you are willing to work with me, please send me a message."
      )
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your name")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(
        "How can I help you? Please, put here your message/request."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });
});
