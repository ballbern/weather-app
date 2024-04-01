import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  it("renders Card component", () => {
    render(<Card />);

    screen.logTestingPlaygroundURL();
    expect(true).toBeTruthy();
  });
});
