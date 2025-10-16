"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const crawlee_1 = require("crawlee");
const extractors_1 = require("./extractors");
exports.router = (0, crawlee_1.createPlaywrightRouter)();
exports.router.addDefaultHandler(async ({ request, page, log }) => {
    log.info(`Processing ${request.url}`);
    // Extract book data from the page
    const bookData = (0, extractors_1.extractBookData)(page);
    log.info(`Extracted book data: ${JSON.stringify(bookData)}`);
    // Here you would typically save the data to a database or file
});
exports.router.addHandler('book-detail', async ({ request, page, log }) => {
    log.info(`Processing book detail page: ${request.url}`);
    const bookData = (0, extractors_1.extractBookData)(page);
    log.info(`Extracted book data: ${JSON.stringify(bookData)}`);
    // Save to database or file
});
