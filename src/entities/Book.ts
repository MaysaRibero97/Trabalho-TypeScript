import Document from './Document.js'
import Person from './Person.js'

export class Book extends Document{
  public isbn: number
  public edition: number
  public volume: number


  constructor (isbn: number, edition: number, volume: number, title: string, subtitle: string, publishedAt: Date, author: Person){
    super(title, subtitle, publishedAt, author)
    this.isbn = isbn
    this.edition = edition
    this.volume = volume
    this.title = title
    this.subtitle = subtitle
    this.publishedAt = publishedAt
    this.author = author
    
  }
    
}

