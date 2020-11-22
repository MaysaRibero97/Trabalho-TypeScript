import Person from './Person.js'

export class Document {
  public title: string
  public subtitle: string
  public publishedAt: Date
  public author: Person

  constructor (title: string, subtitle: string, publishedAt: Date, author: Person) {
    this.title = title
    this.subtitle = subtitle
    this.publishedAt = publishedAt
    this.author = author
  }
}

export default Document
