import { describe, it, expect, beforeEach } from "vitest";
import { Forecast } from "./Forecast";
import { WeatherProvider } from "../../../context/WeatherContext";
import { renderWithClient } from "../../../test/mocks/test-utils";

//? fixed tests.

const mockQueryResults = () => {
  return renderWithClient(
    <WeatherProvider>
      <Forecast />
    </WeatherProvider>
  );
};

describe("Forecast", () => {
  beforeEach(() => mockQueryResults());

  it("renders an icon", async () => {
    const iconEls = await mockQueryResults().findAllByAltText("sunrise icon");

    iconEls.forEach(el => {
      expect(el).toBeInTheDocument();
    });
  });

  it("renders forecast date", async () => {
    const dateEls = await mockQueryResults().findAllByText(/friday feb 13/i);

    dateEls.forEach(el => {
      expect(el).toBeInTheDocument();
    });
  });

  it("renders forecast temp", async () => {
    const tempEls = await mockQueryResults().findAllByText(/20 \/ 30/i);

    tempEls.forEach(el => {
      expect(el).toBeInTheDocument();
    });
  });
});
