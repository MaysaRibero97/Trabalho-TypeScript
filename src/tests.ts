import Person from './entities/Person.js'
import Periodical from './entities/Periodical.js'
import Gender from './entities/Gender.js'
import { Book } from './entities/Book.js'

const pessoa1 = new Person('John Green', new Date('2003-01-03T00:00:00'), Gender.Female)

const livro1 = new Book(1234, 7, 5,'Quem é você alasca', 'O primeiro amigo a primeira garota as últimas palavras',  new Date('2005-3-03T00:00:00') , pessoa1)

const periodical1 = new Periodical(0987, 3, 872, 'Revista Carras', 'FOFOCAS', new Date('2013-6-14T00:00:00') , pessoa1 )

const pessoas = [pessoa1]
const livros = [livro1]
const periodicais = [periodical1]


console.log(pessoas)
console.log(livros)
console.log(periodicais)
