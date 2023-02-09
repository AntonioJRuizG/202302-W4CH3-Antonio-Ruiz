import { Character } from "../models/character";
import { King } from "../models/king";
import { Fighter } from "../models/fighter";
import { Adviser } from "../models/adviser";
import { Squire } from "../models/squire";
// Import { Taskstructure } from '../tasks';

export const mockCharacters: Character[] = [
  new King("Joffrey", "Barathon", 23, true, 2),
  new Fighter("Jaime", "Lannister", 22, true, "sword", 7.8),
  new Fighter("Daenerys", "Targaryen ", 24, true, "Dagger", 2),
];

mockCharacters.push(
  new Adviser("Tyrion", "Lannister", 30, true, mockCharacters[2])
);
mockCharacters.push(
  new Squire("Bronn", "none", 40, true, mockCharacters[1].name, 8)
);
