import { describe, it, expect, beforeEach } from "vitest";
import { SunRiseSet } from "../../";
import { renderWithClient } from "../../../test/mocks/test-utils";
import { WeatherProvider } from "../../../context/WeatherContext";
import { server } from "../../../test/setup";
import { http, HttpResponse } from "msw";

//? fixed tests

const mockQueryResults = () => {
  return renderWithClient(
    <WeatherProvider>
      <SunRiseSet />
    </WeatherProvider>
  );
};

describe("SunRiseSet", () => {
  beforeEach(() => mockQueryResults());

  it("should render sunset and sunrise times", async () => {
    const timeEl = await mockQueryResults().findAllByText(/06:33AM/i);
    timeEl.forEach(el => {
      expect(el).toBeInTheDocument();
    });
  });

  it("should render -- if server response is 500", async () => {
    server.use(
      http.get("*", () => {
        return new HttpResponse(null, {
          status: 500,
        });
      })
    );

    const sunrisEl = await mockQueryResults().findAllByTestId("sunrise-time");
    expect(sunrisEl[0]).toContainHTML(
      '<div data-testid="sunrise-time">--</div>'
    );
  });
});
