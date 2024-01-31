import puppeteer from 'puppeteer';

const blogContent = async (
  url: string,
  elements: string,
  titleElement: string
) => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto(url);

  const allArticles = await page.evaluate(
    (allElementsSelector: string, titleSelector: string) => {
      const articles = document.querySelectorAll(allElementsSelector);
      return Array.from(articles)
        .slice(0, 3)
        .map((article) => {
          const titleElement = article.querySelector(titleSelector);
          const title =
            titleElement instanceof HTMLElement ? titleElement.innerText : '';
          const urlElement = article.querySelector('a');
          const url = urlElement instanceof HTMLElement ? urlElement.href : '';
          return { title, url };
        });
    },
    elements,
    titleElement
  );

  return allArticles;
};

export { blogContent };
