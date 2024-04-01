import { describe, it, expect, beforeEach } from "vitest";
import { WeatherSummary } from "./WeatherSummary";
import { formattedCurrentDateTime } from "../../../utils/helper";
import { renderWithClient } from "../../../test/mocks/test-utils";
import { WeatherProvider } from "../../../context/WeatherContext";
// import { server } from "../../../test/setup";
// import { http, HttpResponse } from "msw";

//? fixed tests.

const mockQueryResults = () => {
  return renderWithClient(
    <WeatherProvider>
      <WeatherSummary />
    </WeatherProvider>
  );
};

describe("WeatherSummary", () => {
  beforeEach(() => mockQueryResults());

  it("renders current time", async () => {
    const cityEl = (await mockQueryResults().findByTestId("current-time"))
      .textContent;
    expect(cityEl).toBe(formattedCurrentDateTime());
  });

  it("renders the city and country name", async () => {
    const cityEl = await mockQueryResults().findAllByText(/Derry, UK/i);
    expect(cityEl[0]).toBeInTheDocument();
  });

  it("renders the description", async () => {
    const descriptionEl = await mockQueryResults().findAllByText(
      /feels like 20 description/i
    );
    expect(descriptionEl[0]).toBeInTheDocument();
  });

  // it("renders -- if the city and country undefined", () => {
  //   summaryData.name = undefined;
  //   summaryData.sys.country = undefined;
  //   const { getByText } = render(<WeatherSummary data={summaryData} />);
  //   expect(getByText(/--, --/i)).toBeInTheDocument();
  // });

  // it("renders -- if the description undefined", () => {
  //   summaryData.main.feels_like = undefined;

  //   const { getByText } = render(<WeatherSummary data={summaryData} />);
  //   expect(getByText(/Feels like NaN/i)).toBeInTheDocument();
  // });
});
