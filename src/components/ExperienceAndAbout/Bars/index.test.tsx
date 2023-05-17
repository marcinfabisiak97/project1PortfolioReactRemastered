import { render } from "@testing-library/react";
import Bars from "../Bars";

test("renders the correct number of bars", () => {
  const { container } = render(<Bars inView={false} />);
  const bars = container.querySelectorAll(".wrapper-bar");
  expect(bars.length).toBe(6);
});
test("set class bar__displayBlock when inView true", () => {
  const { container } = render(<Bars inView={true} />);
  const bars = container.querySelectorAll(".bar__displayBlock");
  expect(bars.length).toBe(6);
});
