import fs from 'fs';
import { blogA } from './blogA';
import { blogB } from './blogB';

export const main = async () => {
  const dataA = await blogA();
  const dataB = await blogB();

  fs.writeFile('dataA.json', JSON.stringify(dataA), (err: any) => {
    if (err) throw err;
    console.log('Blog A the file has been saved!');
  });

  fs.writeFile('dataB.json', JSON.stringify(dataA), (err: any) => {
    if (err) throw err;
    console.log('Blog B the file has been saved!');
  });

  return { dataA, dataB };
};
