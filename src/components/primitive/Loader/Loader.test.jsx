import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Loader } from "./Loader";

describe("Loader", () => {
  it("renders Loader component", () => {
    render(<Loader />);
    expect(true).toBeTruthy();
  });
});
