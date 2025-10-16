"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const worldOfBooksScraper_1 = require("./scrapers/worldOfBooksScraper");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
async function main() {
    const scraper = new worldOfBooksScraper_1.WorldOfBooksScraper();
    try {
        console.log('Starting World of Books scraper...');
        await scraper.start();
        console.log('Scraping completed successfully');
    }
    catch (error) {
        console.error('Error during scraping:', error);
        process.exit(1);
    }
}
main();
