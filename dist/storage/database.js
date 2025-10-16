"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const client_1 = require("@prisma/client");
class Database {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async saveBook(book) {
        await this.prisma.book.upsert({
            where: { sourceId: book.sourceId },
            update: book,
            create: book
        });
    }
    async saveCategories(categories) {
        for (const category of categories) {
            await this.prisma.category.upsert({
                where: { id: category.id },
                update: category,
                create: category
            });
        }
    }
    async getBook(id) {
        return this.prisma.book.findUnique({
            where: { id }
        });
    }
    async close() {
        await this.prisma.$disconnect();
    }
}
exports.Database = Database;
