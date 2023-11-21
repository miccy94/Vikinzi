// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            console.log(`${this.name} has received ${damage} points od damage`);
        }
        else {
            console.log(`${this.name} has died in act of combat!`);
        }
    }

    battleCry() {
        return "Odin owns you all!";
    }
}

/*const proba = new Viking("Nikola", 100, 50);

proba.receiveDamage(100);*/


// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            console.log(`A Saxon has received ${damage} points of damage`);
        }
        else {
            console.log(`A Saxon has died in comabat.`);
        }
    }
}

/*const nes2 = new Saxon(50, 60);
nes2.receiveDamage(50);*/

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() {
        // Uzimanje nasumičnog Vikinga i Saksana iz njihovih armija
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        
        const randomViking = this.vikingArmy[randomVikingIndex];
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

        // Napad Vikinga na Saksana
        randomSaxon.receiveDamage(randomViking.strength);

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }

        return `Viking ${randomViking.name} je napao Saksana i naneo mu štetu.`;
    }


showStatus() {
    if (this.saxonArmy.length === 0) {
        console.log(`Vikings have won the war of the century!`);
    }
    else if (this.vikingArmy.length === 0) {
        console.log(`Saxons have fought for their lives and survived another day...`);
    }
    else {
        console.log(`Vikings and Saxons are still in the thick of battle.`)
    }
}
}

const war = new War();

war.addViking(new Viking("Ragnar", 100, 30));
war.addViking(new Viking("Lagertha", 90, 25));

war.addSaxon(new Saxon(80, 20));
war.addSaxon(new Saxon(70, 18));

console.log(war.vikingAttack());
console.log(war.showStatus());
