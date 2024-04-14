import Team from '../Team';
import Character from '../Character';

describe('Team tests', () => {
  let team: Team;
  let character1: Character;
  let character2: Character;

  beforeEach(() => {
    team = new Team();
    character1 = new Character('warrior1', 'Warrior');
    character2 = new Character('magician1', 'Magician');
  });

  test('Adding a character to the team', () => {
    team.add(character1);
    expect(team.getMembers()).toContain(character1);
  });

  test('Adding duplicate character should throw an error', () => {
    team.add(character1);
    expect(() => team.add(character1)).toThrow('Character already exists in the team.');
  });

  test('Adding multiple characters to the team', () => {
    team.addAll(character1, character2);
    expect(team.getMembers()).toContain(character1);
    expect(team.getMembers()).toContain(character2);
  });

  test('Adding duplicate characters in addAll should throw an error', () => {
    team.add(character1);
    expect(() => team.addAll(character1, character2)).toThrow('Character already exists in the team.');
  });

  test('toArray should return an array of characters', () => {
    team.add(character1);
    team.add(character2);
    const membersArray = team.toArray();
    expect(membersArray).toEqual(expect.arrayContaining([character1, character2]));
  });
});