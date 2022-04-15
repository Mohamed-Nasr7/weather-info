import useFetch from '../../hooks/useFetch';
import { countriesUrl } from '../../constants/urls';

const CountriesDropdown = () => {
  const { data, isLoading, error } = useFetch(countriesUrl);
  const countries = data as any[];

  return (
    <div className='dropdown'>
      <button className='dropdown__button' disabled={isLoading}>
        Select a country
      </button>
      <ul className='dropdown__menu'>
        {data &&
          countries.map(item => <li key={item.cca3}>{item.name.common}</li>)}
      </ul>
    </div>
  );
};

export default CountriesDropdown;
