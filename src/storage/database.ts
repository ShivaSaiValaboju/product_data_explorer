import { PrismaClient } from '@prisma/client';
import { Book, Category, Review } from '../models/types';

export class Database {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async saveBook(book: Book): Promise<void> {
    await this.prisma.book.upsert({
      where: { sourceId: book.sourceId },
      update: book,
      create: book
    });
  }

  async saveCategories(categories: Category[]): Promise<void> {
    for (const category of categories) {
      await this.prisma.category.upsert({
        where: { id: category.id },
        update: category,
        create: category
      });
    }
  }

  async getBook(id: string): Promise<Book | null> {
    return this.prisma.book.findUnique({
      where: { id }
    });
  }

  async close(): Promise<void> {
    await this.prisma.$disconnect();
  }
}