import { expect, test, describe } from "bun:test";
import { greet } from "./greet";

describe("greet", () => {
  test("defaults to Bun", () => {
    expect(greet()).toBe("Hello via Bun!");
  });

  test("uses the provided name", () => {
    expect(greet("world")).toBe("Hello via world!");
  });
});
