import Document from './Document.js'
import Person from './Person.js'

export class Periodical extends Document{
  public issn: number
  public volume: number
  public issue: number


  constructor (issn: number, volume: number, issue: number, title: string, subtitle: string, publishedAt: Date , author: Person){
    super(title, subtitle, publishedAt, author)
    this.issn = issn
    this.volume = volume
    this.issue = issue
    this.title = title
    this.subtitle = subtitle
    this.publishedAt = publishedAt
    this.author = author
    
  }
    
}
export default Periodical
