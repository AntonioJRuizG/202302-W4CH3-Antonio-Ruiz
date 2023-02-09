import { Character } from "./character";

export class Fighter extends Character {
  // eslint-disable-next-line max-params
  constructor(
    name: string,
    family: string,
    age: number,
    isLive: true,
    public weapon: string,
    public skills: number
  ) {
    super(name, family, age, isLive);
    this.weapon = weapon;
    this.skills = skills;
  }

  greetings() {
    super.greetings();
    return `I first punch then I ask.`;
  }
}
