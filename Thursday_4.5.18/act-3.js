// ---- Each character created using your constructor should have the following properties...
    // Name: The character's name --> String
    // Profession: What the character does for a living --> String
    // Gender: The character's gender --> String
    // Age: The character's age --> Integer
    // Strength: Abstraction for how strong the character is --> Integer
    // HitPoints (HP): Abstraction for how much health the character has --> Integer
    // PrintStats: Function which prints all of a character's properties to the screen

function Character (name, profession, gender, age, strength, hitpoints){
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;

    this.printStats = function(){
        console.log("Name: " + this.name + "\nProfession: " + this.profession + "\nGender: " + this.gender + "\nAge: " + this.age + "\nStrength: " + this.strength + "\nHitpoints: " + this.hitpoints);
    };

    // IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and determining whether they are above or below zero. Should return true if alive and false if dead.
    this.isAlive = function(){
        if (this.hitpoints >= 0){ 
            console.log(this.name + " is alive!");
            return true;
        } else {
            console.log(this.name+ " is dead!");
            return false;
        }
    }
    // Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.
    this.attack = function(char2){
        char2.hitpoints -= this.strength;
    }
    // LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.
    this.levelUp = function(){
        this.age += 1;
        this.strength += 5;
        this.hitpoints += 25;
    }
    
}

// Once you have created your constructor, create two new characters and print their properties to the screen
var buzz = new Character("Buzz", "Astronaut", "Male", 18,20,8);
var woody = new Character("Woody", "Cowboy", "Male", 22,35,6);
var rex = new Character("Rex", "Dinnosaur", "Male", 15,28,4);

buzz.printStats();
//buzz.isAlive();
woody.printStats();
rex.printStats();

//BONUS: After completing the previous sections and making sure they work, you now have everything you need to create a very basic RPG where two characters fight one another. 
buzz.attack(woody);
woody.isAlive();
woody.printStats();
console.log("------------");
woody.levelUp();
woody.isAlive();
woody.printStats();
console.log("------------");
buzz.printStats();

