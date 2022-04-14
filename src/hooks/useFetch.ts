import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState<object | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    };
    getData();
  }, [url]);
};

export default useFetch;
