import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import ContactDetails from "./index";
import { store } from "../../../state/store";

test("renders contact information correctly", () => {
  const state = {
    author: "Marcin Fabisiak",
    email: "marcinfabisiak123@gmail.com",
    phone: "48 604 132 689",
    gitHub: "https://github.com/marcinfabisiak97",
  };
  render(
    <Provider store={store}>
      <ContactDetails />
    </Provider>
  );
  expect(screen.getByText(state.email)).toBeInTheDocument();
  expect(screen.getByText(state.phone)).toBeInTheDocument();
  expect(screen.getByText(`author: ${state.author}`)).toBeInTheDocument();
  expect(
    screen.getByText("description: Front-End Developer")
  ).toBeInTheDocument();
  expect(screen.getByText(`git: ${state.gitHub}`)).toBeInTheDocument();
});
