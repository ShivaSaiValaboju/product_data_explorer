"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractBookDetails = extractBookDetails;
exports.extractCategories = extractCategories;
exports.extractNavigation = extractNavigation;
async function extractBookDetails(page) {
    return page.evaluate(() => {
        const title = document.querySelector('h1')?.textContent || '';
        const author = document.querySelector('.author')?.textContent || '';
        const price = parseFloat(document.querySelector('.price')?.textContent?.replace('£', '') || '0');
        const imageUrl = document.querySelector('.product-image img')?.getAttribute('src') || '';
        const description = document.querySelector('.description')?.textContent || '';
        return {
            id: crypto.randomUUID(),
            title,
            author,
            price,
            imageUrl,
            productUrl: window.location.href,
            sourceId: window.location.pathname.split('/').pop() || '',
            description,
            publisher: null,
            publicationDate: null,
            isbn: null,
            categories: Array.from(document.querySelectorAll('.breadcrumb a')).map(a => a.textContent || ''),
            createdAt: new Date(),
            updatedAt: new Date()
        };
    });
}
async function extractCategories(page) {
    return page.evaluate(() => {
        return Array.from(document.querySelectorAll('.category-list a')).map(a => ({
            id: crypto.randomUUID(),
            name: a.textContent || '',
            url: a.getAttribute('href') || '',
        }));
    });
}
async function extractNavigation(page) {
    return page.evaluate(() => {
        return Array.from(document.querySelectorAll('nav a')).map(a => ({
            id: crypto.randomUUID(),
            title: a.textContent || '',
            url: a.getAttribute('href') || ''
        }));
    });
}
