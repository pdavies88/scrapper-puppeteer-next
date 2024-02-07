'use server';
import fs from 'fs';
import { blogContent } from './blogContent';
const url = 'https://swizec.com/blog/';

const blogB = async () => {
  const dataB = await blogContent(url, '.css-zo9vbf', 'h2');
  console.log(dataB);

  fs.writeFile('dataB.json', JSON.stringify(dataB), (err: any) => {
    if (err) throw err;
    console.log('Blog B the file has been saved!');
  });
};

export { blogB };
