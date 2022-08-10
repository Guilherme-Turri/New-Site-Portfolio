import React from 'react';

const useGetData = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(false);

  let response;
  let json;

  const request = async (url, options) => {
    response = await fetch(url, options);
    if (response.status !== 200) {
      setError(true);
    }
    json = await response.json();
    setData(json);
  };

  return { data, error, request };
};

export default useGetData;
