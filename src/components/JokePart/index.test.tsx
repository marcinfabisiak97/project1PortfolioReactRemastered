import { render, screen } from "@testing-library/react";
import JokePart from "./index";

describe("JokePart", () => {
  test("displays a joke text", async () => {
    render(<JokePart />);
    const jokeText = await screen.getByRole("article");
    expect(jokeText).toBeInTheDocument();
  });
});
