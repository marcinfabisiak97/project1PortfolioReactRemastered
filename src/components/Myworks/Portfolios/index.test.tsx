import { render, screen } from "@testing-library/react";
import Portfolios from ".";
test("check links in document", () => {
  render(<Portfolios />);
  const netlifyLinkSecondProject = screen.getByTestId("linkProject2");
  expect(netlifyLinkSecondProject).toHaveAttribute(
    "href",
    "https://projekt2reactquiz.netlify.app"
  );
  const gitLinkSecondProject = screen.getByTestId("linkGitProject2");
  expect(gitLinkSecondProject).toHaveAttribute(
    "href",
    "https://github.com/marcinfabisiak97/quizReact"
  );
  const netlifyLinkThirdProject = screen.getByTestId("linkProject3");
  expect(netlifyLinkThirdProject).toHaveAttribute(
    "href",
    "https://cv-react-typescript-onepage-pr3.netlify.app/"
  );
  const gitLinkThirdProject = screen.getByTestId("linkGitProject3");
  expect(gitLinkThirdProject).toHaveAttribute(
    "href",
    "https://github.com/marcinfabisiak97/cv-projekt3-rem-Typescript"
  );
});
