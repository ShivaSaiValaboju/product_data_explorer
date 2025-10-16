import { PlaywrightCrawler, Configuration } from 'crawlee';
import { Book, Category, Review } from '../models/types';
import { Cache } from '../storage/cache';
import { Database } from '../storage/database';
import { extractBookDetails, extractCategories, extractNavigation } from './extractors';

export class WorldOfBooksScraper {
  private crawler: PlaywrightCrawler;
  private cache: Cache;
  private db: Database;

  constructor() {
    this.cache = new Cache();
    this.db = new Database();

    const configuration: Configuration = {
      maxConcurrency: 2,
      requestHandler: this.router.bind(this),
    };

    this.crawler = new PlaywrightCrawler(configuration);
  }

  private async router({ page, request }) {
    const url = request.url;

    // Check cache first
    const cached = await this.cache.get(url);
    if (cached) {
      return cached;
    }

    if (url.includes('/category/')) {
      const categories = await extractCategories(page);
      await this.cache.set(url, categories);
      await this.db.saveCategories(categories);
      return categories;
    }

    if (url.includes('/product/')) {
      const bookDetails = await extractBookDetails(page);
      await this.cache.set(url, bookDetails);
      await this.db.saveBook(bookDetails);
      return bookDetails;
    }

    // Default to navigation extraction
    const navigation = await extractNavigation(page);
    await this.cache.set(url, navigation);
    return navigation;
  }

  public async start() {
    await this.crawler.run(['https://www.worldofbooks.com']);
  }

  public async refreshProduct(productId: string) {
    const product = await this.db.getBook(productId);
    if (product) {
      await this.cache.invalidate(product.productUrl);
      await this.crawler.run([product.productUrl]);
    }
  }
}