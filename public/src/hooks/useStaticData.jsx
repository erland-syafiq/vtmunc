import {useState, useEffect} from 'react';

async function fetchData (path, setData) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Network response from ${path} was not ok`);
    }
    const data = await response.json();
    setData(data);
  } catch (error) {
    console.error(`Error fetching data from ${path}: `, error);
  }
};

function useStaticData(path, initialValue) {
  const [data, setData] = useState(initialValue);

  useEffect(() => {fetchData(path, setData);}, []);
  return data;
}

export default useStaticData;