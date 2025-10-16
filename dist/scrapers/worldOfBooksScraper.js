"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldOfBooksScraper = void 0;
const crawlee_1 = require("crawlee");
const cache_1 = require("../storage/cache");
const database_1 = require("../storage/database");
const extractors_1 = require("./extractors");
class WorldOfBooksScraper {
    constructor() {
        this.cache = new cache_1.Cache();
        this.db = new database_1.Database();
        const configuration = {
            maxConcurrency: 2,
            requestHandler: this.router.bind(this),
        };
        this.crawler = new crawlee_1.PlaywrightCrawler(configuration);
    }
    async router({ page, request }) {
        const url = request.url;
        // Check cache first
        const cached = await this.cache.get(url);
        if (cached) {
            return cached;
        }
        if (url.includes('/category/')) {
            const categories = await (0, extractors_1.extractCategories)(page);
            await this.cache.set(url, categories);
            await this.db.saveCategories(categories);
            return categories;
        }
        if (url.includes('/product/')) {
            const bookDetails = await (0, extractors_1.extractBookDetails)(page);
            await this.cache.set(url, bookDetails);
            await this.db.saveBook(bookDetails);
            return bookDetails;
        }
        // Default to navigation extraction
        const navigation = await (0, extractors_1.extractNavigation)(page);
        await this.cache.set(url, navigation);
        return navigation;
    }
    async start() {
        await this.crawler.run(['https://www.worldofbooks.com']);
    }
    async refreshProduct(productId) {
        const product = await this.db.getBook(productId);
        if (product) {
            await this.cache.invalidate(product.productUrl);
            await this.crawler.run([product.productUrl]);
        }
    }
}
exports.WorldOfBooksScraper = WorldOfBooksScraper;
