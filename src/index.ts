import { WorldOfBooksScraper } from './scrapers/worldOfBooksScraper';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  const scraper = new WorldOfBooksScraper();
  
  try {
    console.log('Starting World of Books scraper...');
    await scraper.start();
    console.log('Scraping completed successfully');
  } catch (error) {
    console.error('Error during scraping:', error);
    process.exit(1);
  }
}

main();