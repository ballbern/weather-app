import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders Button component", () => {
    render(<Button>title</Button>);

    screen.logTestingPlaygroundURL();
    expect(true).toBeTruthy();
  });
});
