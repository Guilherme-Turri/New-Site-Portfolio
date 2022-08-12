import React from 'react';

const useGetData = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  let response;
  let json;

  const request = async (url, options) => {
    setLoading(true);
    console.log(error);
    response = await fetch(url, options);
    if (response.status !== 200) {
      setError(true);
      setLoading(false);
    }
    json = await response.json();
    setData(json);
    setLoading(false);
  };

  return { data, error, request, loading };
};

export default useGetData;
