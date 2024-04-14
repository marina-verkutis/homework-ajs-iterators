export default class Character {
    readonly name: string;
    readonly type: string;
    health: number;
    level: number;
    attack: number;
    defence: number;

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
        this.health = 50;
        this.level = 1;
        this.attack = 40;
        this.defence = 10;
    }
}