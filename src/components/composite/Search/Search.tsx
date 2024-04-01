import { useRef, useState, ChangeEvent } from "react";
import { Input, Button } from "../../";
import { cities } from "../../../utils/cities";
import styled from "styled-components";
import { useWeatherQuery } from "../../../hooks/useWeatherQuery";
import { useClickOutside } from "../../../hooks/useClickOutside";

const StyledSearchContainer = styled.div`
  position: relative;
  padding: 0 2rem;
  margin: 2rem 0;
`;

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
`;

const StyledSearchList = styled.div`
  position: absolute;
  z-index: 1;
  background-color: var(--white);
  width: 78%;
  border: 1px solid lightgray;
  border-radius: 20px;
  top: 3.3rem;
  max-height: 20rem;
  overflow: auto;

  & > div {
    padding: 1rem;

    &:hover {
      background-color: #f3f1f1;
      cursor: pointer;
    }
  }
`;

export const Search = () => {
  const [query, setQuery] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [hasList, setHasList] = useState(false);
  const searchRef = useRef(null);
  const { refetch: refetchForecast } = useWeatherQuery("forecast", query, {
    enabled: false,
  });
  const { refetch: refetchWeather } = useWeatherQuery("weather", query, {
    enabled: false,
  });

  useClickOutside(searchRef, () => {
    if (hasList) setHasList(false);
  });

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(query.toLowerCase())
  );

  const search = (e: ChangeEvent<HTMLInputElement>): void => {
    e.target.value.length ? setDisabled(false) : setDisabled(true);
    setQuery(e.target.value);
  };

  const getCity = (city: string) => {
    setQuery(city);
    setHasList(false);
    setDisabled(false);
  };

  const getCityWeather = () => {
    refetchForecast();
    refetchWeather();
  };

  return (
    <StyledSearchContainer ref={searchRef}>
      <StyledSearch>
        <Input
          value={query}
          type='search'
          onChange={search}
          onFocus={() => setHasList(true)}
        />
        <Button onClick={getCityWeather} disabled={disabled}>
          Search
        </Button>
      </StyledSearch>
      {hasList && (
        <StyledSearchList>
          {filteredCities.map(city => (
            <div key={city} onClick={() => getCity(city)}>
              {city}
            </div>
          ))}
        </StyledSearchList>
      )}
    </StyledSearchContainer>
  );
};
