import { Card, Icon } from "../../";
import { formattedTime } from "../../../utils/helper";
import { StyledSunRiseSet, StyledSunRiseSetBody } from "./styles";
import { useWeather } from "../../../context/WeatherContext";

export const SunRiseSet = () => {
  const { isLoadingWeather, isErrorWeather, errorWeather, sunRiseSetData } =
    useWeather();

  console.log(errorWeather);

  return (
    <Card
      isLoading={isLoadingWeather}
      isError={isErrorWeather}
      errorMessage={errorWeather?.message}
    >
      <Card.Header>
        <h2>sunrise and sunset</h2>
      </Card.Header>
      <Card.Body>
        <StyledSunRiseSetBody>
          <StyledSunRiseSet>
            <div data-testid='sunrise-time'>
              {formattedTime(sunRiseSetData?.sunrise) ?? "--"}
            </div>
            <Icon size={4} alt={"sunrise icon"} icon={"01d"} />
          </StyledSunRiseSet>
          <StyledSunRiseSet>
            <div data-testid='sunset-time'>
              {formattedTime(sunRiseSetData?.sunset) ?? "--"}
            </div>
            <Icon size={4} alt={"sunset icon"} icon={"01n"} />
          </StyledSunRiseSet>
        </StyledSunRiseSetBody>
      </Card.Body>
    </Card>
  );
};
