import { Card, List, Icon } from "../../";
import { StyledListItemContent } from "./styles";
import { formatDate } from "../../../utils/helper";
import { useWeather } from "../../../context/WeatherContext";

export const Forecast = () => {
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
        <h2>forecast</h2>
      </Card.Header>
      <Card.Body>
        <List>
          {filteredForecastDays?.map(({ dt, weather, main }, i) => (
            <List.Item key={i}>
              <StyledListItemContent>
                <span data-testid='list-date'>{formatDate(dt)}</span>
                <span data-testid='list-temp'>
                  {`${Math.round(main.temp_min)}`}
                  <span>&#8451;</span> / {`${Math.round(main.temp_max)}`}
                  <span>&#8451;</span>
                </span>
                <span>
                  <Icon
                    data-testid='list-icon'
                    width={40}
                    height={40}
                    alt={"sunrise icon"}
                    icon={weather[0].icon}
                  />
                </span>
              </StyledListItemContent>
            </List.Item>
          ))}
        </List>
      </Card.Body>
    </Card>
  );
};
