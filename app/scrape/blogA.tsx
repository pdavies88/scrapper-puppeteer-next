import { blogContent } from './blog-content';
const url = 'https://www.joshwcomeau.com/';

const blogA = () => {
  return blogContent(url, 'article', 'h3');
};

export { blogA };
