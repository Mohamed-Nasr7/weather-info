import useFetch from '../../hooks/useFetch';
import { countriesUrl } from '../../constants/urls';

const CountriesDropdown = () => {
  const { data, isLoading, error } = useFetch(countriesUrl);
  return <div></div>;
};

export default CountriesDropdown;
