import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { countriesUrl } from '../../constants/urls';

const CountriesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, error } = useFetch(countriesUrl);
  const countries = data as any[];

  return (
    <div className='dropdown'>
      <button className='dropdown__button' disabled={isLoading}>
        Select a country
      </button>
      {isOpen && (
        <ul className='dropdown__menu'>
          {data &&
            countries.map(item => <li key={item.cca3}>{item.name.common}</li>)}
        </ul>
      )}
    </div>
  );
};

export default CountriesDropdown;
