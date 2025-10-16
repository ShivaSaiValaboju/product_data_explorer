import { Page } from 'playwright';
import { Book, Category, NavigationItem } from '../models/types';

export async function extractBookDetails(page: Page): Promise<Book> {
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
      categories: Array.from(document.querySelectorAll('.breadcrumb a')).map(a => a.textContent || '')
    };
  });
}

export async function extractCategories(page: Page): Promise<Category[]> {
  return page.evaluate(() => {
    return Array.from(document.querySelectorAll('.category-list a')).map(a => ({
      id: crypto.randomUUID(),
      name: a.textContent || '',
      url: a.getAttribute('href') || '',
    }));
  });
}

export async function extractNavigation(page: Page): Promise<NavigationItem[]> {
  return page.evaluate(() => {
    return Array.from(document.querySelectorAll('nav a')).map(a => ({
      id: crypto.randomUUID(),
      title: a.textContent || '',
      url: a.getAttribute('href') || ''
    }));
  });
}