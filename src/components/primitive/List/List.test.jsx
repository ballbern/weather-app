import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { List } from "./List";

describe("List", () => {
  it("renders List component", () => {
    render(<List />);
    expect(true).toBeTruthy();
  });
});
