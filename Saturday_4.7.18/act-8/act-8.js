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

//Once all of the players have been created, print their stats.
var newPlayer = function(){
    if (starter.length + sub.length < 8) {
        console.log("make a new player");
        inquirer.prompt ([
            {
                name: "name",
                message: "{layer's name:",
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
            ]).then(function(answers){
    

            });
        
        }else {
        console.log("done");






    }
}



//Once your code is functioning properly, move on to create a function called "playGame" 
//which will be run after all of the players have been created and will do the following:
//Run 5 times. Each time the function runs:
    //Two random numbers between 1 and 20 are rolled and compared against the starters' offensive and defensive stats
    
    //If the first number is lower than the sum of the team's offensive stat, add one point to the team's score.
    //If the second number is higher than the sum of the team's defensive stat, remove one point from the team's score.
    
    //After the score has been changed, prompt the user to allow them to substitute 1 player from within the starters array with the player from within the subs array.


var count = 0;
var playGame = function(){
    if (count < 5){

        if (Math.floor(Math.random() * 2) === 0) {

        }else {
        
        }

}
};

   
//After the game has finished (been run 5 times):
    //If the score is positive, run `goodGame` for all of the players currently within the starters array.
    //If the score is negative, run `badGame` for all of the players currently within the starters array.
    //If the score is equal to zero, do nothing with the starters.
    //Give the user a message about if they won, and the status of their starters.


//After printing the results, ask the user if they would like to play again.
    
    //Run `playGame` from the start once more if they do.
    //End the program if they don't.
    if (  ){
        playGame();
    }else{
        console.log("End of Game!");
    }
};
playGame();



//* HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.
//* HINT: It has been a while since we have worked with random numbers explicitly. If you are having troubles, look up Math.random on Google and you should find some resources to help.
