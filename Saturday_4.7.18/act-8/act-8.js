//Over the course of this assignment you are going to put together a function which uses constructors and user input to create and manage a team of players.
var inquirer = require("inquirer");

//Start out by creating a constructor function called "Player" with the following properties and methods...
  //* `name`: Property which contains the player's name
  //* `position`: Property which holds the player's position
  //* `offense`: Property which is a value between 1 and 10 to show how good this player is on offense
  //* `defense`: Property which is a value between 1 and 10 to show how good this player is on defense
function Player(){
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;

    //`goodGame`: Method which increases either the player's offense or defense property based upon a coinflip.
    this.goodGame = function(){
        if (Math.floor(Math.random() * 2) === 0) {
            this.offense++;
            console.log(this.name + ":" + "offense has increased");
        }else {
            this.defense++;
            console.log(this.name + ":" + "defense has increased");
        }
    };
    //* `badGame`: Method which decreases either the player's offense or defense property based upon a coinflip.
    this.badGame = function(){
        if (Math.floor(Math.random() * 2) === 0) {
            this.offense--;
            console.log(this.name + ":" + "offense has decreased");
        }else {
            this.defense--;
            console.log(this.name + ":" + "defense has decreased");
        }
    };
    //* `printStats`: Method which prints all of the player's properties to the screen
    this.printStats = function(){
        console.log("Name: " + this.name + "\nPosition: " + this.position + "\nOffense: " + this.offense + "\nDefense: " + this.defense);
    };
}

// Now create a program which allows the user to create 3 unique players; 2 starters and a sub. 
// It should take as user input the name, position, offense, and defense of each player.
// Once all of the players have been created, print their stats.
var starter = [];
var sub = [];
var team = [];

var createPlayer = function(){
    if (starter.length + sub.length < 8) {
        console.log("make a new player");
        inquirer.prompt ([
            {
                name: "name",
                message: "Player's name:",
            }, {
                name: "position", 
                message: "Player's position?",
            }, {
                name: "offense",
                message: "Player's offensive rating:",

                //validate to ensure offense rating is a number
                validate: function(value){
                    if(isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10){
                        return true;
                    }
                    return false;
                }
            }, {
                name: "defense",
                message: "Player's defensive rating:",
                
                //validate to ensure offense rating is a number
                validate: function(value){
                    if(isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10){
                        return true;
                    }
                    return false;
                }
            }
            ]).then(function(answers){
                var player = new Player(answers.name, answers.position, pataseInt(answers.offense), parseInt(answers.defense));
            
                //Once your code is functioning properly, move on to create a function called "playGame" 
            //which will be run after all of the players have been created and will do the following:
            //Run 5 times. Each time the function runs:    
                if (starter.length < 5){ 
                    starter.push(player);
                    team.push(player);
                    console.log(player.name + "added to starters");
                }else {
                    sub.push(player);
                    team.push(player);
                    console.log(player.name + "added to subs");   
                }
                createPlayer();
            });
    }else {
        for (var i=0; i < team.length; i++){
            team[i].printStats();   
        }
    }
};
    createPlayer();
