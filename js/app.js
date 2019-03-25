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
    on: true; //assumes if false, lightSwitch is off
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
const class = {
    Destiny: {
        name: 'Destiny',
    }
    Nick: {
        name: 'Nick',
    }
    Adam: {
        name: 'Adam',
    }
    Matt: {
        name: 'Matt',
    }
}

// A list of student names from our class, each with a location.
//objects with strings

const class = {
    Destiny: {
        name: 'Destiny',
        location: 'front, center',
    }
    Nick: {
        name: 'Nick',
        location: 'front, right',
    }
    Adam: {
        name: 'Adam',
        location: 'middle, right',
    }
    Matt: {
        name: 'Matt',
        location: 'middle, center',
    }
}

// A list of student names from our class, each with a location and each 
//with a list of favorite tv shows.
//Objects with strings

const class = {
    Destiny: {
        name: 'Destiny',
        location: 'front, center',
        favoriteShows: 'GoT',
    }
    Nick: {
        name: 'Nick',
        location: 'front, right',
        favoriteShows: 'The Bachelor',
    }
    Adam: {
        name: 'Adam',
        location: 'middle, right',
        favoriteShows: 'Pokemon',
    }
    Matt: {
        name: 'Matt',
        location: 'middle, center',
        favoriteShows: 'sports...only sports',
    }
}













// function grossToNumber (str){
//     //how can only numbers get in?
// }