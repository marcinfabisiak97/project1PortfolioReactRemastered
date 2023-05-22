import "intersection-observer";
import { render, screen } from "@testing-library/react";
import Tools from ".";

test("check if all img and p will appear", async () => {
  render(<Tools />);

  const regEx =
    /Javascript|React|Typescript|Redux|Sass|Bootstrap|Bitbucket|Sourcetree/i;
  const imgAlt = screen.getAllByAltText(regEx) as HTMLImageElement[];
  expect(imgAlt).toHaveLength(8);
  const paragraph = screen.getAllByAltText(regEx) as HTMLImageElement[];
  expect(paragraph).toHaveLength(8);
});
