import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState<object | object[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();
    };
    getData();
  }, [url]);
};

export default useFetch;
