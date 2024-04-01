import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Error } from "./Error";

describe("Error", () => {
  it("renders Error component", () => {
    render(<Error />);
    expect(true).toBeTruthy();
  });
});
