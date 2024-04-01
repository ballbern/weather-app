// https://github.com/TkDodo/testing-react-query
// https://mswjs.io/docs/migrations/1.x-to-2.x
import { ReactElement, ReactNode } from "react";
import { render } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";

//? fixed tests.

export const handlers = [
  // Add handler for GET request to weather endpoint
  http.get(`https://api.openweathermap.org/data/2.5/weather`, () => {
    return HttpResponse.json({
      name: "Derry",
      main: { temp: 20, feels_like: 20 },
      sys: { country: "UK", sunrise: 1710829995, sunset: 1710829995 },
      weather: [{ description: "description" }],
    });
  }),

  // Add handler for GET request to forecast endpoint
  http.get(`https://api.openweathermap.org/data/2.5/forecast`, () => {
    return HttpResponse.json({
      city: {},
      cnt: 40,
      cod: "200",
      list: [
        {
          dt: 1234567890,
          main: {
            temp: 25,
            temp_min: 20,
            temp_max: 30,
          },
          weather: [{ id: 800, icon: "01d" }],
          wind: { deg: 180, gust: 25, speed: 20 },
        },
      ],
      message: 0,
    });
  }),

  // // Add handler for OPTIONS request to forecast endpoint
  // http.options(`https://api.openweathermap.org/data/2.5/forecast`, () => {
  //   return HttpResponse.json({
  //     // Add response data for options request to forecast endpoint if needed
  //   });
  // }),
];

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

export function renderWithClient(ui: ReactElement) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi: ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>
      ),
  };
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient();
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
}
