import { renderHook } from "@testing-library/react";
import { useChangeCopiedStateToDefaultAfter, useScroll } from "./index";

describe("useScroll hook", () => {
  test("should return a boolean value", () => {
    const { result } = renderHook(() => useScroll({ current: null }));
    expect(typeof result.current[0]).toBe("boolean");
  });
});

describe("useChangeCopiedStateToDefaultAfter hook", () => {
  test("should return an array with a boolean value and a function", () => {
    const { result } = renderHook(() =>
      useChangeCopiedStateToDefaultAfter(500)
    );
    const [copied, setCopied] = result.current;
    expect(typeof copied).toBe("boolean");
    expect(typeof setCopied).toBe("function");
  });
});
