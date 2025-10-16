import { PlaywrightCrawler } from 'crawlee';
import { router } from './scrapers/worldOfBooksScraper';

async function main() {
    const crawler = new PlaywrightCrawler({
        requestHandler: router,
    });

    await crawler.run(['https://www.worldofbooks.com/en-gb']);
}

main().catch(console.error);
