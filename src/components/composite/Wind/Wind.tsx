import { Card, List } from "../..";
import { StyledListItemContent } from "./styles";
import { formatDate } from "../../../utils/helper";
import { useWeather } from "../../../context/WeatherContext";

export const Wind = () => {
  const {
    isLoadingForecast,
    isErrorForecast,
    errorForecast,
    forecastData,
    filterDays,
  } = useWeather();

  const filteredForecastDays = filterDays(forecastData?.forecastDays);

  return (
    <Card
      isLoading={isLoadingForecast}
      isError={isErrorForecast}
      errorMessage={errorForecast?.message}
    >
      <Card.Header>
        <h2>wind forecast</h2>
      </Card.Header>
      <Card.Body>
        <List>
          {filteredForecastDays?.map(({ dt, wind }, i) => (
            <List.Item key={i}>
              <StyledListItemContent>
                <span data-testid='list-date'>{formatDate(dt)}</span>
                <span>Speed: {wind.speed} mph</span>
                <span>Gust: {Math.round(wind.gust)} mph</span>
              </StyledListItemContent>
            </List.Item>
          ))}
        </List>
      </Card.Body>
    </Card>
  );
};
