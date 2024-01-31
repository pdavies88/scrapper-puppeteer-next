import { blogContent } from './blog-content';
const url = 'https://swizec.com/blog/';

const blogB = () => {
  return blogContent(url, '.css-zo9vbf', 'h2');
};

export { blogB };
