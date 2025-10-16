import { createPlaywrightRouter } from 'crawlee';
import { extractBookData } from './extractors';

export const router = createPlaywrightRouter();

router.addDefaultHandler(async ({ request, page, log }) => {
    log.info(`Processing ${request.url}`);

    // Extract book data from the page
    const bookData = extractBookData(page);
    log.info(`Extracted book data: ${JSON.stringify(bookData)}`);

    // Here you would typically save the data to a database or file
});

router.addHandler('book-detail', async ({ request, page, log }) => {
    log.info(`Processing book detail page: ${request.url}`);

    const bookData = extractBookData(page);
    log.info(`Extracted book data: ${JSON.stringify(bookData)}`);

    // Save to database or file
});
