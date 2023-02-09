import { Character } from "./character";

export class King extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    isLive: true,
    public reignLength: number
  ) {
    super(name, family, age, isLive);
    this.reignLength = reignLength;
  }

  greetings() {
    super.greetings();
    return `You all gonna die.`;
  }
}
