import { main } from './scrape';

export default async function Home() {
  const data = await main();
  const { dataA, dataB } = data;
  return (
    <main className='flex flex-col p-24'>
      {dataA &&
        dataA.map((article, i) => (
          <div key={i}>
            <h2>{article.title}</h2>
            <a href={article.url}>{article.url}</a>
          </div>
        ))}

      {dataB &&
        dataB.map((article, i) => (
          <div key={i}>
            <h2>{article.title}</h2>
            <a href={article.url}>{article.url}</a>
          </div>
        ))}
    </main>
  );
}
