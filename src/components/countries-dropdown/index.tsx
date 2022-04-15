import useFetch from '../../hooks/useFetch';
import { countriesUrl } from '../../constants/urls';

const CountriesDropdown = () => {
  const { data, isLoading, error } = useFetch(countriesUrl);
  const countries = data as any[];

  return (
    <div className='dropdown'>
      <button className='dropdown__button'></button>
      <ul className='dropdown__menu'></ul>
    </div>
  );
};

export default CountriesDropdown;
