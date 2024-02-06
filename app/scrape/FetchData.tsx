'use client';
import { useState } from 'react';

export const FetchData = ({
  dataA,
}: {
  dataA: { title: string; url: string }[];
}) => {
  const [fetchData, setFetchData] = useState<{ title: string; url: string }[]>(
    []
  );
  const getData = async () => {
    setFetchData(dataA);
  };

  return (
    <div>
      <button
        type='button'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
        onClick={getData}>
        Fetch Data
      </button>
      {fetchData &&
        fetchData.map((data, i) => (
          <div key={i}>
            <h2>{data.title}</h2>
            <a href={data.url}>{data.url}</a>
          </div>
        ))}
    </div>
  );
};
