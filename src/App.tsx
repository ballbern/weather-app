import {
  Layout,
  Logo,
  WeatherSummary,
  SunRiseSet,
  Forecast,
  Loader,
  Error,
  Wind,
  Search,
} from "./components";
import { useWeather } from "./context/WeatherContext";

function App() {
  const {
    isLoadingWeather,
    isLoadingForecast,
    isErrorForecast,
    isErrorWeather,
  } = useWeather();

  // if both weather and forecast are loading return loader component.
  if (isLoadingWeather && isLoadingForecast) return <Loader />;

  if (isErrorForecast && isErrorWeather) return <Error />;

  return (
    <Layout>
      <Layout.Header>
        <Logo />
      </Layout.Header>
      <Layout.Search>
        <Search />
      </Layout.Search>
      <Layout.Main>
        <WeatherSummary />
        <Forecast />
        <SunRiseSet />
        <Wind />
      </Layout.Main>
      <Layout.Footer></Layout.Footer>
    </Layout>
  );
}

export default App;
