import { useContext, createContext } from "react";
import {
  WeatherContextProps,
  WeatherProviderProps,
  ForecastDaysType,
} from "../types/types";
import { formatDate } from "../utils/helper";
import { useWeatherQuery } from "../hooks/useWeatherQuery";

const WeatherContext = createContext({} as WeatherContextProps);

// todo: look into this warning
// eslint-disable-next-line react-refresh/only-export-components
export const useWeather = () => {
  return useContext(WeatherContext);
};

//? create a custom query hook
export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const {
    data: weatherData,
    isLoading: isLoadingWeather,
    isError: isErrorWeather,
  } = useWeatherQuery("weather");

  const {
    data: forecastData,
    isLoading: isLoadingForecast,
    isError: isErrorForecast,
  } = useWeatherQuery("forecast");

  //? moved filterDays from utils to custom hook.
  // Filter the array to remove duplicate forecast days
  const filterDays = (days: ForecastDaysType[]) => {
    if (!days) return;

    // For each item in the array, check if its index matches the index of the first occurrence of an item with the same date (dt)
    const filteredForecastDays = days?.filter(
      (item, index, self) =>
        index === self.findIndex(t => formatDate(t.dt) === formatDate(item.dt))
    );
    return filteredForecastDays;
  };

  return (
    <WeatherContext.Provider
      value={{
        isLoadingWeather,
        isLoadingForecast,
        isErrorWeather,
        isErrorForecast,
        weatherSummaryData: {
          name: weatherData?.name,
          temp: weatherData?.main.temp,
          country: weatherData?.sys.country,
          feelLike: weatherData?.main.feels_like,
          description: weatherData?.weather[0].description,
        },
        sunRiseSetData: {
          sunrise: weatherData?.sys.sunrise,
          sunset: weatherData?.sys.sunset,
        },
        forecastData: { forecastDays: forecastData?.list },
        filterDays,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
