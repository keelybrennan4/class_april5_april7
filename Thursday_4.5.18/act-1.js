//* Make a dogs object with three keys...
//* First key called "raining" with a value of true
//* Second key called "noise" with a value of "Woof!"
//* Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining dogs

var dogs = {
    raining: true,
    noise: "Woof",
    makeNoise: function(){ 
        if(this.raining === true){
            console.log(this.noise);
        }
    }
};

//Make a cats object with three keys...
//First key called "raining" with a value of false
//Second key called "noise" with a value of "Meow!"
//Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining cats

var cats = {
    raining: false,
    noise: "Meow",
    makeNoise: function(){ 
        if(this.raining === true){
            console.log(this.noise);
        }
    }
};

//Make the dog bark
dogs.makeNoise();

//Make the cat meow
//Change cats.raining to true since it's not raining initially above.  
cats.raining = true;
cats.makeNoise();

// Create a function called "massHysteria" which takes in both the cats and the dogs object and prints "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!" 
//if both of the `raining` keys are equal to true.
function massHysteria(){
    if (dogs.raining && cats.raining){
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
};

massHysteria();