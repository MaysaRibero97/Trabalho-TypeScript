"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_js_1 = __importDefault(require("./entities/Person.js"));
const Periodical_js_1 = __importDefault(require("./entities/Periodical.js"));
const Gender_js_1 = __importDefault(require("./entities/Gender.js"));
const Book_js_1 = require("./entities/Book.js");
const pessoa1 = new Person_js_1.default('John Green', new Date('2003-01-03T00:00:00'), Gender_js_1.default.Female);
const livro1 = new Book_js_1.Book(1234, 7, 5, 'Quem é você alasca', 'O primeiro amigo a primeira garota as últimas palavras', new Date('2005-3-03T00:00:00'), pessoa1);
const periodical1 = new Periodical_js_1.default(0987, 3, 872, 'Revista Carras', 'FOFOCAS', new Date('2013-6-14T00:00:00'), pessoa1);
const pessoas = [pessoa1];
const livros = [livro1];
const periodicais = [periodical1];
console.log(pessoas);
console.log(livros);
console.log(periodicais);
