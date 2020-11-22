import Gender from './Gender.js'

export class Person implements IShowYourself {
  public name: string
  public birth: Date
  public gender: Gender

  constructor (name: string, birth: Date, gender: Gender) {
    this.name = name
    this.gender = gender
    this.birth = birth
  }

  public showYourself () {
    const article = this.gender === Gender.Male ? 'o' : 'a'
    return `Olá, eu sou ${article} ${this.name}.`
  }
}

export default Person
