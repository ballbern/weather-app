import { ReactNode } from "react";

export type WeatherProviderProps = {
  children: ReactNode;
};

type WeatherSummaryDataType = {
  name: string;
  temp: number;
  country: string;
  feelLike: number;
  description: string;
};

type SunRiseSetDataType = { sunrise: number; sunset: number };

type WeatherType = {
  id: number;
  icon: string;
};

type MainType = {
  temp: number;
  temp_min: number;
  temp_max: number;
};

type WindType = { deg: number; gust: number; speed: number };

export type ForecastDaysType = {
  dt: number;
  main: MainType;
  weather: WeatherType[];
  wind: WindType;
};

export type WeatherContextProps = {
  isLoadingForecast: boolean;
  isLoadingWeather: boolean;
  isErrorWeather: boolean;
  isErrorForecast: boolean;
  errorWeather: Error | unknown | { message: string };
  errorForecast: Error | unknown | { message: string };
  weatherSummaryData: WeatherSummaryDataType;
  sunRiseSetData: SunRiseSetDataType;
  forecastData: { forecastDays: ForecastDaysType[] };
  filterDays: (dates: ForecastDaysType[]) => ForecastDaysType[] | undefined;
};
