export interface Book {
    title: string;
    author: string | null;
    price: number | null;
    isbn: string | null;
    description: string | null;
    imageUrl: string | null;
    category: string | null;
    rating: number | null;
    reviewCount: number | null;
    publisher: string | null;
    publicationDate: string | null;
    pages: number | null;
    language: string | null;
    format: string | null;
    weight: string | null;
    dimensions: string | null;
}
