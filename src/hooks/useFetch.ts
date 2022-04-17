import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState<object | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error();
        const data = await response.json();
        setData(data);
      } catch {
        setError('An error occured!! please try again.');
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
