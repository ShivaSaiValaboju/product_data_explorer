# World of Books Scraper

This project is a web scraper designed to extract book data from World of Books using Crawlee and Playwright.

## Features

- Scrapes navigation structure and categories
- Extracts product listings and details
- Captures reviews and ratings
- Implements caching and deduplication
- Stores data in a PostgreSQL database using Prisma

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

3. Create a .env file with the following variables:
```
DATABASE_URL="postgresql://user:password@localhost:5432/worldofbooks"
```

## Usage

Start the scraper:
```bash
npm run dev
```

Refresh a specific product:
```bash
npm run refresh-product <productId>
```

## Development

- `npm run build` - Build the TypeScript code
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## Project Structure

- `src/scrapers/` - Scraping logic
- `src/models/` - TypeScript interfaces
- `src/storage/` - Database and caching
- `src/utils/` - Helper functions

## License

MIT