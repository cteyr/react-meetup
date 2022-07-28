import { useState, useEffect } from "react";

export const useFetch = (options) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(options.url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setIsLoading(false);
      });
  }, [options.url]);

  return {
    data,
    isLoading,
  };
};
