var inquirer = require('inquirer');

function Programmer(name, position, age, language){
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language; 

    //Now create a method for the constructor that would print all of the information contained within an object to the console.
    this.printStats = function(){
        console.log("Name: " + this.name + "\nPosition: " + this.position + "\nAge: " + this.age + "\nLanguage: " + this.language);
    }
};
inquirer.prompt ([{
    name: "name",
    message: "what is your name?",
},{
    name: "position", 
    message: "what is your current position?",
},{
    name: "age",
    message: "what is you age?",
},{
    name: "language",
    message: "what is your favortie programming language?",
}
]).then(function(answers){
  var newPerson = new Programmer(answers.name, answers.position, answers.age, answers.language);
  newPerson.printStats();
});