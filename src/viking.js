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

const proba = new Viking("Nikola", 100, 50);

proba.receiveDamage(100);

// stigla do 3 :D

// Saxon
class Saxon {}

// War
class War {}
