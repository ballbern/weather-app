import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Icon } from "./Icon";

describe("Icon", () => {
  it("renders Icon component", () => {
    render(<Icon />);
    expect(true).toBeTruthy();
  });
});
