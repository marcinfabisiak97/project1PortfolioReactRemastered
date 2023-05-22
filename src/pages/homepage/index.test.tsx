import "intersection-observer";
import { render, screen } from "@testing-library/react";
import Homepage from "./index";
import { Provider } from "react-redux";
import { store } from "../../state/store";
test("should render all the components inside the homepage", () => {
  render(
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
  const experienceAndAboutComponent = screen.getByTestId("experienceAndAbout");
  const toolsComponent = screen.getByTestId("tools");
  const myWorksComponent = screen.getByTestId("myWorks");
  const workStyleComponent = screen.getByTestId("workStyle");
  const jokePartComponent = screen.getByTestId("jokePart");
  const contactComponent = screen.getByTestId("contact");
  const navigationComponent = screen.getByTestId("navigation");
  expect(navigationComponent).toBeInTheDocument();
  expect(experienceAndAboutComponent).toBeInTheDocument();
  expect(toolsComponent).toBeInTheDocument();
  expect(myWorksComponent).toBeInTheDocument();
  expect(workStyleComponent).toBeInTheDocument();
  expect(jokePartComponent).toBeInTheDocument();
  expect(contactComponent).toBeInTheDocument();
});
