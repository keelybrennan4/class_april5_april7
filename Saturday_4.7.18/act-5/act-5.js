//In this activity, we are going to create a constructor function called "Programmer" which can be used to create objects containing information on various programmers.
//Your "Programmer" constructor should be able to take in the following information...
  //The programmer's name
  //Their position/job title
  //How old they are
  //Favorite programming language

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

//Finally, create a "Programmer" object and call the method to print its contents
var joe = new Programmer("Joe", "The Boss", 30, "Javascript");
joe.printStats();


Programmer.prototype.printStats = function(){
    console.log("Name: " + this.name + "\nPosition: " + this.position + "\nAge: " + this.age + "\nLanguage: " + this.language);
};
console.log('instantiation ', joe);
console.log('proto ', Object.getPrototypeOf(joe));