import useFetch from '../../hooks/useFetch';
import { weatherUrl } from '../../constants/apis';

type Props = {
  countryCoordinates: { [key: string]: number };
};

const apiKey = process.env.REACT_APP_API_KEY;

const WeatherInfo = ({ countryCoordinates }: Props) => {
  return <div></div>;
};

export default WeatherInfo;
