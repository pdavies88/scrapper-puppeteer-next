import puppeteer from 'puppeteer';

export const dynamicContent = async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('https://roadmap-redis.vercel.app/');

  const allItems = await page.evaluate(() => {
    const inputs = document.querySelectorAll('form.flex.items-center');
    return Array.from(inputs)
      .slice(0, 5)
      .map((input) => {
        const titleElement = input.querySelector('h3');
        const title =
          titleElement instanceof HTMLElement ? titleElement.innerText : '';
        const votesElement = input.querySelector('div');
        const votes =
          votesElement instanceof HTMLElement ? votesElement.innerText : '';
        return { title, votes };
      });
  });

  return allItems;
};
