import useFetch from '../../hooks/useFetch';
import { weatherUrl } from '../../constants/apis';

type Props = {
  countryCoordinates: { [key: string]: number };
};

const apiKey = process.env.REACT_APP_API_KEY;

const WeatherInfo = ({ countryCoordinates }: Props) => {
  const URL = `${weatherUrl}?lat=${countryCoordinates.lat}&lon=${countryCoordinates.long}&appid=${apiKey}`;
  const { data, isLoading, error } = useFetch(URL);
  const country = data as { [key: string]: any };

  return (
    <div>
      <h2>Weather</h2>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default WeatherInfo;
