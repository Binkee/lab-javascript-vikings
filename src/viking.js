// Soldier
class Soldier {
    constructor(health, strength) {
    this.health = health
    this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage) {
      this.health = this.health - damage

    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name
        }
    attack(){
        return this.strength
    }
    receiveDamage(damage) {
        this.health = this.health - damage
       if(this.health > 0) {
           return `${this.name} has received ${damage} points of damage`
       }
       return `${this.name} has died in act of combat`
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health = this.health - damage
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        return `A Saxon has died in combat`
    }

}

// War
class War {
    constructor(){
    this.vikingArmy = []
     this.saxonArmy = []
    }
    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        let randomIViking = Math.random(Math.floor() * this.vikingArmy.length)
        let randomISaxon = Math.random(Math.floor() * this.saxonArmy.length)
        let randomViking = this.vikingArmy[randomIViking]
        let randomSaxon = this.saxonArmy[randomISaxon]
       randomSaxon.receiveDamage(randomViking.strength) 
       if(randomSaxon.health <= 0){
           this.saxonArmy.splice(randomISaxon, 1)
       }
       return 
    }
    saxonAttack(){

    }
}

