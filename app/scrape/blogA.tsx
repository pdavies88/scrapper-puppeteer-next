import { blogContent } from './blogContent';
const url = 'https://www.joshwcomeau.com/';

const blogA = () => {
  return blogContent(url, 'article', 'h3');
};

export { blogA };
