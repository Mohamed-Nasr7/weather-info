import useFetch from '../../hooks/useFetch';
import CountryCoordinates from '../../interfaces/CountryCoordinates';
import { weatherUrl } from '../../constants/apis';
import './style.css';
import Spinner from '../spinner';

type Props = {
  countryCoordinates: CountryCoordinates;
};

const apiKey = process.env.REACT_APP_API_KEY;

const WeatherInfo = ({ countryCoordinates }: Props) => {
  const URL = `${weatherUrl}?lat=${countryCoordinates.latitude}&lon=${countryCoordinates.longitude}&appid=${apiKey}`;
  const { data, isLoading, error } = useFetch(URL);
  const country = data as { [key: string]: any };

  return (
    <section className='weatherInfo'>
      <div className='weatherInfo__card'>
        {isLoading ? (
          <Spinner />
        ) : (
          data && (
            <>
              <h2 className='weatherInfo__title'>{country.name} Weather</h2>
              <ul className='weatherInfo__list'>
                <li>Temperature: {country.main.temp}</li>
                <li>Pressure: {country.main.pressure}</li>
                <li>Humidity: {country.main.humidity}</li>
                <li>Wind speed: {country.wind.speed}</li>
              </ul>
            </>
          )
        )}
      </div>
    </section>
  );
};

export default WeatherInfo;
