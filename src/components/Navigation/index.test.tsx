import { renderHook, act } from "@testing-library/react";
import { useState } from "react";

test("toggles boolean value on function call", () => {
  const { result } = renderHook(() => useState(true));
  const [isOpen, setOpen] = result.current;

  expect(isOpen).toBe(true);

  act(() => {
    setOpen(false);
  });

  expect(result.current[0]).toBe(false);

  act(() => {
    setOpen(true);
  });

  expect(result.current[0]).toBe(true);
});
