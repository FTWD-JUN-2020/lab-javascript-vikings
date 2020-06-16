// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack = () => {
    return this.strength;
  };

  receiveDamage = (theDamage) => {
    this.health -= theDamage;
  };
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage = (theDamage) => {
    this.health -= theDamage;
    if (this.health > 0) {
      return `${this.name} has received ${theDamage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  };
  battleCry = () => {
    return "Odin Owns You All!";
  };
}

// Saxon
class Saxon extends Soldier {

  receiveDamage = (damage) => {
    this.health -= damage
    if(this.health > 0){
        return `A Saxon has received ${damage} points of damage`
    } else {
        return `A Saxon has died in combat`
    }
  }

}

// // War
// class War {

//   constructor(){
//     this.vikingArmy = []
//     this.saxonArmy = []
//   }
  
//   addViking = (soldier) => {
//     this.vikingArmy.push(soldier)
//   }

//   addSaxon = (soldier) => {
//     this.saxonArmy.push(soldier)
//   }

//   vikingAttack = () => {
//     // let thor = this.vikingArmy[  Math.floor( Math.random() * this.vikingArmy.length )] //Get a random viking
 
//     let thor = this.vikingArmy[0]
//     let saxon = this.saxonArmy[0]

//     let result = saxon.receiveDamage(thor.strength)

//     if(saxon.health <= 0){
//       this.saxonArmy.shift()
//     }
    
//     return result 
 


//   }

//   saxonAttack = () => {
//     let viking = this.vikingArmy[0]
//     let saxon = this.saxonArmy[0]
 
//     let result = viking.receiveDamage(saxon.strength)

//     if(viking.health <= 0){
//       this.vikingArmy.shift()
//     }

//     return result
   

    
//   }

//   showStatus = () => { 
//     if(this.saxonArmy.length === 0)
//       return "Vikings have won the war of the century!"
    
//     if(this.vikingArmy.length === 0)
//       return "Saxons have fought for their lives and survived another day..."
    
//     return "Vikings and Saxons are still in the thick of battle."
//   }
  

// }









class War {
  constructor(){
    this.vikingArmy  = [] //ryan
    this.saxonArmy   = []
  }
  
  addViking=(soldier)=>{
    this.vikingArmy.push(soldier) //ryan
  }
  
  addSaxon=(solider)=>{
    this.saxonArmy.push(solider)
  }

  vikingAttack=()=>{
    let saxon   = this.saxonArmy[Math.floor(  Math.random() * this.saxonArmy.length )]
    let viking  = this.vikingArmy[Math.floor(  Math.random() * this.vikingArmy.length )]
    saxon.receiveDamage(viking.strength)
  }
  saxonAttack=()=>{
    let saxon   = this.saxonArmy[Math.floor(  Math.random() * this.saxonArmy.length )]
    let viking  = this.vikingArmy[Math.floor(  Math.random() * this.vikingArmy.length )]
    viking.receiveDamage(saxon.strength)
  }
}














let warObj = {
  saxonArmy: [], 
  vikingArmy: [],

  addViking: function(soldier){
    this.vikingArmy.push(soldier)
  },
  addSaxon: function(soldier){
    this.saxonArmy.push(soldier)
  }


} 


