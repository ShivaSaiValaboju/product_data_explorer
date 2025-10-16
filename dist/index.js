"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crawlee_1 = require("crawlee");
const worldOfBooksScraper_1 = require("./scrapers/worldOfBooksScraper");
async function main() {
    const crawler = new crawlee_1.PlaywrightCrawler({
        requestHandler: worldOfBooksScraper_1.router,
    });
    await crawler.run(['https://www.worldofbooks.com/en-gb']);
}
main().catch(console.error);
