import { render, screen } from "@testing-library/react";
import Experience from "./index";
import { Provider } from "react-redux";
import { store } from "../../../state/store";

describe("Experience", () => {
  test("check link for github", () => {
    render(
      <Provider store={store}>
        <Experience />
      </Provider>
    );
    const githubButton = screen.getByAltText("github");
    expect(githubButton.closest("a")).toHaveAttribute(
      "href",
      "https://github.com/marcinfabisiak97"
    );
  });
});
