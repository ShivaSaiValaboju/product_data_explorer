// Data models for scraped content
export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  imageUrl: string;
  productUrl: string;
  sourceId: string;
  description?: string;
  publisher?: string;
  publicationDate?: Date;
  isbn?: string;
  categories: string[];
}

export interface Category {
  id: string;
  name: string;
  parentId?: string;
  url: string;
}

export interface Review {
  id: string;
  bookId: string;
  rating: number;
  content: string;
  author: string;
  date: Date;
}

export interface NavigationItem {
  id: string;
  title: string;
  url: string;
  children?: NavigationItem[];
}