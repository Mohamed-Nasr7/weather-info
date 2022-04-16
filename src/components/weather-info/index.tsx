import useFetch from '../../hooks/useFetch';
import { weatherUrl as url } from '../../constants/apis';

type Props = {
  countryCoordinates: { [key: string]: number };
};

const WeatherInfo = ({ countryCoordinates }: Props) => {
  return <div></div>;
};

export default WeatherInfo;
