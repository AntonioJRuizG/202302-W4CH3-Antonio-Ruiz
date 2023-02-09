import { Character } from "./character";

export class Squire extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    isLive: true,
    public servesTo: string,
    public peloteo: number
  ) {
    super(name, family, age, isLive);
    this.servesTo = servesTo;
  }

  greetings() {
    super.greetings();
    return `I'm a loser.`;
  }
}
