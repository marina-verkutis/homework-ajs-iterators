import Character from './Character';

export default class Team {
    private members: Set<Character>;

    constructor() {
        this.members = new Set();
    }

    add(character: Character): void {
        if (this.members.has(character)) {
            throw new Error('Character already exists in the team.');
        }
        this.members.add(character);
    }

    addAll(...characters: Character[]): void {
        characters.forEach(character => {
            if (this.members.has(character)) {
                throw new Error('Character already exists in the team.');
            }
            this.members.add(character);
        });
    }

    // Итератор для перебора персонажей в команде
    [Symbol.iterator](): Iterator<Character> {
        let index = 0;
        const characters = [...this.members];

        return {
            next(): IteratorResult<Character> {
                if (index < characters.length) {
                    return {
                        value: characters[index++],
                        done: false
                    };
                } else {
                    return {
                        value: null,
                        done: true
                    };
                }
            }
        };
    }

    toArray(): Character[] {
        return [...this.members];
    }
}