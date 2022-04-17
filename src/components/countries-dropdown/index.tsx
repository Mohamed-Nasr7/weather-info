import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { countriesUrl } from '../../constants/apis';

type Props = {
  setCountryCoordinates: React.Dispatch<React.SetStateAction<object>>;
};
type Country = {
  name: { common: string };
  latlng: number[];
  cca3: string;
};

const CountriesDropdown = ({ setCountryCoordinates }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [countryName, setCountryName] = useState('');
  const { data, isLoading, error } = useFetch(countriesUrl);
  const countries = data as any[];

  const selectCountry = (country: Country) => {
    setCountryName(country.name.common);
    setIsOpen(false);
    setCountryCoordinates(coords => ({
      ...coords,
      lat: country.latlng[0],
      long: country.latlng[1],
    }));
  };

  return (
    <div className='dropdown'>
      <button
        className='dropdown__button'
        disabled={isLoading}
        onClick={() => setIsOpen(isOpen => !isOpen)}
      >
        {countryName || 'Select a country'}
      </button>

      {isOpen && data && (
        <ul className='dropdown__menu'>
          {countries.map(item => (
            <li key={item.cca3} onClick={() => selectCountry(item)}>
              {item.name.common}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountriesDropdown;
