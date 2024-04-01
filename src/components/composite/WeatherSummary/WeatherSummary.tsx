import { Card, CurrentTime, Icon } from "../../";
import {
  StyledWeatherSummaryBody,
  StyledWeatherSummaryFooter,
  StyledWeatherSummaryHeader,
} from "./styles";
import { useWeather } from "../../../context/WeatherContext";

export const WeatherSummary = () => {
  const { isLoadingWeather, isErrorWeather, errorWeather, weatherSummaryData } =
    useWeather();

  return (
    <Card
      isLoading={isLoadingWeather}
      isError={isErrorWeather}
      errorMessage={errorWeather?.message}
    >
      <Card.Header>
        <CurrentTime />
        <StyledWeatherSummaryHeader>{`${weatherSummaryData?.name ?? "--"}, ${
          weatherSummaryData?.country ?? "--"
        }`}</StyledWeatherSummaryHeader>
      </Card.Header>
      <Card.Body>
        <StyledWeatherSummaryBody>
          <div>
            {`${Math.round(weatherSummaryData?.temp) ?? "--"}`}
            <span>&#8451;</span>
          </div>
          <Icon icon={"10d"} alt={"main icon"} size={2} />
        </StyledWeatherSummaryBody>
      </Card.Body>
      <Card.Footer>
        <StyledWeatherSummaryFooter>
          {`Feels like ${Math.round(weatherSummaryData?.feelLike) ?? "--"}`}
          <span>&#8451;</span> {`${weatherSummaryData?.description ?? "--"}`}
        </StyledWeatherSummaryFooter>
      </Card.Footer>
    </Card>
  );
};
