import { Character } from "./character";

export class Adviser extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    isLive: true,
    public helpsTo: Character
  ) {
    super(name, family, age, isLive);
    this.helpsTo = helpsTo;
  }

  greetings() {
    super.greetings();
    return `I think I'm gonna die soon.`;
  }
}
