//Mixed Data Types

// The questions!
// 1. Data types
// Refresher
// So far we have seen:

// Strings
// Numbers
// Booleans
// Arrays
// Objects
// When these datatypes are combined, we get a data structure, for example, 
//an array that contains objects that each contain booleans.

// Suppose you are tasked with creating some software, and it is up to you 
//to determine which datatypes and what data structure to use. For each of 
//the following, write which data types you would use to represent the data, 
//and then give a small example of the data structure:

// A light switch that can be either on or off.
//Boolean
const lightSwitch = {
    on: true, //assumes if false, lightSwitch is off
}

// A user's email address.
//string
const user = {
    email: "someone@something.com"
}

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
//strings
const spaceship = {
    defense: "hull",
    weapon: "laser blasters",
    gathering: "tractor beam",
    engine: "warp drive"
}

// A list of student names from our class.
//objects with strings
const ourClass = {
    Destiny: {
        name: 'Destiny',
    },
    Nick: {
        name: 'Nick',
    },
    Adam: {
        name: 'Adam',
    },
    Matt: {
        name: 'Matt',
    }
}

// A list of student names from our class, each with a location.
//objects with strings

const ourClass1 = {
    Destiny: {
        name: 'Destiny',
        location: 'front, center',
    },
    Nick: {
        name: 'Nick',
        location: 'front, right',
    },
    Adam: {
        name: 'Adam',
        location: 'middle, right',
    },
    Matt: {
        name: 'Matt',
        location: 'middle, center',
    }
}

// A list of student names from our class, each with a location and each 
//with a list of favorite tv shows.
//Objects with strings

const ourClass2 = {
    Destiny: {
        name: 'Destiny',
        location: 'front, center',
        favoriteShows: 'GoT',
    },
    Nick: {
        name: 'Nick',
        location: 'front, right',
        favoriteShows: 'The Bachelor',
    },
    Adam: {
        name: 'Adam',
        location: 'middle, right',
        favoriteShows: 'Pokemon',
    },
    Matt: {
        name: 'Matt',
        location: 'middle, center',
        favoriteShows: 'sports...only sports',
    }
}


// 2. Take it Easy
//1. Make an array that holds all of the colors of the rainbow.

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

//2. Write code that will access "blue" from the rainbow array.

const blue = rainbow[4];
console.log(blue);

//3. Make an object that is called your name and holds the information about 
//your favorite food, a hobby, the name of the town that you live in 
//currently, and your favorite datatype.

const Destiny = {
    favoriteFood: 'scallops',
    hobby: 'crafting',
    currentTown: 'Englewood, CO',
    favoriteDatatype: Boolean,
}

//4. Write code that will access your hobby from the object that you just created.

console.log(Destiny.hobby);









// function grossToNumber (str){
//     //how can only numbers get in?
// }