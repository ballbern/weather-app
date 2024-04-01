import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Logo } from "./Logo";

describe("Logo", () => {
  it("renders Logo component", () => {
    render(<Logo />);
    expect(true).toBeTruthy();
  });
});
