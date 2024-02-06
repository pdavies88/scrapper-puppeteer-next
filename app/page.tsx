import { main } from './scrape';
import { dynamicContent } from './scrape/dynamic';
import { FetchData } from './scrape/FetchData';
// import DynamicData from './scrape/DynamicData';
import FileWrite from './scrape/FileWrite';
// import cron from 'node-cron';

async function getData() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const data = await main();
  const { dataA } = data;

  const dynamicRefresh = await dynamicContent();

  // const logMessage = () => {
  //   console.log('Cron job executed at:', new Date().toLocaleString());
  // };
  // // Schedule the cron job to run every minute
  // cron.schedule('* * * * *', async () => {
  //   logMessage();
  // });

  const pokeData = await getData();

  return (
    <main className='flex flex-col p-24'>
      {/* <DynamicData /> */}
      <h2>Josh Comeau Articles</h2>
      <div className='p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4'>
        {dataA &&
          dataA.map((article, i) => (
            <div key={i}>
              <h2>{article.title}</h2>
              <a href={article.url}>{article.url}</a>
            </div>
          ))}
      </div>
      <h2>https://roadmap-redis.vercel.app/ Polling</h2>
      <div className='p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4'>
        {dynamicRefresh &&
          dynamicRefresh.map((item, i) => (
            <div key={i}>
              <h2>{item.title}</h2>
              <p>{item.votes}</p>
            </div>
          ))}
      </div>
      <FetchData dataA={dataA} />
      <FileWrite />
      <div className='p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4'>
        <h2>Pokemon Data</h2>
        <div>
          <h3>{pokeData.name}</h3>
          <img src={pokeData.sprites.front_default} alt={pokeData.name} />
        </div>
      </div>
    </main>
  );
}
