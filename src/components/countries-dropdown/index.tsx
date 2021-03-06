import React, { useState, useLayoutEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import Spinner from '../spinner';
import CountryCoordinates from '../../interfaces/CountryCoordinates';
import { countriesUrl } from '../../constants/apis';
import './style.css';

type Props = {
  setCountryCoordinates: React.Dispatch<
    React.SetStateAction<CountryCoordinates>
  >;
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
  const countries = data as Country[];

  useLayoutEffect(() => {
    document.addEventListener('click', () => setIsOpen(false));
  }, []);

  const openMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(isOpen => !isOpen);
    e.stopPropagation();
  };

  const selectCountry = (country: Country) => {
    setCountryName(country.name.common);
    setIsOpen(false);
    setCountryCoordinates(coords => ({
      ...coords,
      latitude: country.latlng[0],
      longitude: country.latlng[1],
    }));
  };

  return (
    <div className='dropdown'>
      <button className='dropdown__button' onClick={openMenu}>
        {countryName || 'Select a country'}
        <span className='dropdown__chevron'></span>
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

      {isLoading && (
        <div className='page-loader'>
          <Spinner />
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default CountriesDropdown;
