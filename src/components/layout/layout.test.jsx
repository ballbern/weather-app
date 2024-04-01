import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Layout } from "./Layout";

describe("Layout", () => {
  it("renders Layout component", () => {
    render(<Layout />);
    expect(true).toBeTruthy();
  });
});
