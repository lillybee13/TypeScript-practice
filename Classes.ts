
class Pokemon {

    name: string;
    type: string;
    atk1: string;
    atk2: string;
    level: number;

    constructor(name: string, type: string, atk1: string, atk2: string, level: number){
        this.name = name;
        this.type = type;
        this.atk1 = atk1;
        this.atk2 = atk2;
        this.level = level;
    };

    getName(): string {
        return this.name;
    }
}

const pikachu = new Pokemon("Pikachu", "Electric", "Thunder Shock", "Agility", 25);

console.log(pikachu.getName());