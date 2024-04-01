import axios from "axios";
import { useQuery } from "react-query";

const currentLocation = "Derry,UK";

const fetchForecast = async (weather: string, city?: string) => {
  return await axios
    .get(
      `https://api.openweathermap.org/data/2.5/${weather}?q=${
        city ?? currentLocation
      }&APPID=${import.meta.env.VITE_API_KEY}&units=metric&lang=en`
    )
    .then(res => res.data);
};

export const useWeatherQuery = (
  weather: string,
  city?: string,
  config?: { enabled: boolean }
) => {
  return useQuery(weather, () => fetchForecast(weather, city), config);
};
