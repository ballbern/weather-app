import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CurrentTime } from "./CurrentTime";

describe("CurrentTime", () => {
  it("renders CurrentTime component", () => {
    render(<CurrentTime />);

    screen.logTestingPlaygroundURL();
    expect(true).toBeTruthy();
  });
});
