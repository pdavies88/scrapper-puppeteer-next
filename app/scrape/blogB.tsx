'use server';
import fs from 'fs';
import { blogContent } from './blog-content';
const url = 'https://swizec.com/blog/';

const blogB = () => {
  const dataB = blogContent(url, '.css-zo9vbf', 'h2');

  fs.writeFile('dataB.json', JSON.stringify(dataB), (err: any) => {
    if (err) throw err;
    console.log('Blog B the file has been saved!');
  });
};

export { blogB };
