var inquirer = require("inquirer");

function Programmer(name, position, age, language){
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language; 
}
    Programmer.prototype.printStats = function(){
        console.log("Name: " + this.name + "\nPosition: " + this.position + "\nAge: " + this.age + "\nLanguage: " + this.language);
};

var count = 0;
var askQuestion = function(){
   if (count < 5){

    inquirer.prompt ([
        {
            name: "name",
            message: "what is your name?",
        }, {
            name: "position", 
            message: "what is your current position?",
        }, {
            name: "age",
            message: "what is you age?",
        }, {
            name: "language",
            message: "what is your favortie programming language?",
        }
        ]).then(function(answers){
            var newPerson = new Programmer(answers.name, answers.position, answers.age, answers.language);
            newPerson.printStats();
            
            count++;
            askQuestion();
        });
    }else {
        console.log("done");
    }
};
askQuestion();