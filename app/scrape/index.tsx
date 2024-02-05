import { blogA } from './blogA';

export const main = async () => {
  const dataA = await blogA();

  return { dataA };
};
