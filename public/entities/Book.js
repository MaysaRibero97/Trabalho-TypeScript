"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const Document_js_1 = __importDefault(require("./Document.js"));
class Book extends Document_js_1.default {
    constructor(isbn, edition, volume, title, subtitle, publishedAt, author) {
        super(title, subtitle, publishedAt, author);
        this.isbn = isbn;
        this.edition = edition;
        this.volume = volume;
        this.title = title;
        this.subtitle = subtitle;
        this.publishedAt = publishedAt;
        this.author = author;
    }
}
exports.Book = Book;
