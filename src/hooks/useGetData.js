import { useState, useEffect } from "react";

const useGetData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
     .then((res) => res.json())
     .then((rawData) => setData(rawData));
  }, [url]);

  return [data];
};

export default useGetData;