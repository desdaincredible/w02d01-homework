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



//3. Crazy Object!

const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}
// Use crazyObject to log the following.

// "omg my mouth is burning"

const phrase1 = crazyObject.taco[1].salsa[5];
console.log(phrase1);

// "Pretty pretty prettayyyyy good"

const phrase2 = crazyObject.larry.quotes[0];
console.log(phrase2);

// "Swearing at Larry and Jeff"

const phrase3 = crazyObject.larry.characters[2].favourtieHobby;
console.log(phrase3);

// "Chicken Teriyaki Boyyyyyy"

const phrase4 = crazyObject.larry.nicknames[1];
console.log(phrase4);

// The object the contains the name funkhauser

//to print funkhauser
const phrase5 = crazyObject.larry.characters[1].name
console.log(phrase5);

//answer
const obj = crazyObject.larry.characters
console.log(obj);



// 4. Object-ception
// With the following object:

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}
// Change the value of limbo to null.

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;

const limbo = inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo;

console.log(limbo);




// 5-7. Bond Films
// Copy the following bondFilms array of objects above into your js file. Use 
//loops and conditionals and functions in order to complete the below:

const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

//5. Create a new array called bondTitles with only the titles of the Bond films, 
//and console.log the new array.
// const bondTitles = [];

// for (let key in bondFilms) {
//     bondTitles.push(bondFilms[key].title);
// }

// console.log(bondTitles);



// 6. Create a new array oddBonds, of only the Bond films released on 
//odd-numbered years.
const oddBonds = [];
console.log(bondFilms[0].year);

for (let key in bondFilms) {
    if (bondFilms[key].year % 2 !== 0) {
        oddBonds.push(bondFilms[key].title);
    }
}

console.log(oddBonds);


// Determine the total cumulative gross of the Bond franchise, and console.log 
//the result.
// Hint: To make the grosses into usable numbers, look into the .replace 
//Javascript method (there are many ways to do this, however). Look into 
//parseInt() also.

const gross = [];

for (let key in bondFilms) {
    gross.push(bondFilms[key].gross)
}

console.log(gross);

let minusCrap = [];
let minusCrap2 = [];
let minusCrap3 = [];
let minusCrap4 = [];

for (let i = 0; i < gross.length; i++) {
    minusCrap.push(gross[i].replace('$', ""));
    minusCrap2.push(minusCrap[i].replace(',', ""));
    minusCrap3.push(minusCrap2[i].replace(',', ""));
    minusCrap4.push(minusCrap3[i].replace(',', ""));
}
console.log(minusCrap);
console.log(minusCrap2);
console.log(minusCrap3);
console.log(minusCrap4);


let grossWorking = [];
let grossArray = [];
for (let i = 0; i < minusCrap4.length; i++) {
    grossWorking = parseInt(minusCrap4[i]);
    grossArray.push(grossWorking);
    console.log(grossArray);

    // grossSum += minusCrap4[i];
}
console.log(grossWorking);
console.log(grossSum);


//THIS IS THE PART THAT ISN'T WORKING. SAYS grossSum ISN'T DEFINED FOR SOME REASON.

let grossSum = 0;

for (let i = 0; i < grossArray.length; i++) {
    grossSum += grossArray[i];
}

console.log(grossSum);


// const grossAdd = "";

// for (let i = 0; i < gross.length; i++) {
//     const grossAdd = parseInt(gross[i]);
// }

// console.log(grossAdd);





// function grossToNumber (str){
//     //how can only numbers get in?
// }