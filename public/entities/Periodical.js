"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Periodical = void 0;
const Document_js_1 = __importDefault(require("./Document.js"));
class Periodical extends Document_js_1.default {
    constructor(issn, volume, issue, title, subtitle, publishedAt, author) {
        super(title, subtitle, publishedAt, author);
        this.issn = issn;
        this.volume = volume;
        this.issue = issue;
        this.title = title;
        this.subtitle = subtitle;
        this.publishedAt = publishedAt;
        this.author = author;
    }
}
exports.Periodical = Periodical;
exports.default = Periodical;
