import { useEffect, useState } from "react";
const url = "https://jsonplaceholder.typicode.com/posts";

export const useFetchData = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return { data };
};
