'use strict';
/*
Lecture 032 Activating Strict Mode
let hasDriversLicense =false;
const passTest =true;

if(passTest) hasDriversLicense =true;
if (hasDriversLicense) console.log('i can drive :D');

//const interface ='audio';
//const private =258;  reserved words get error on console when use strict mode
*/
/*
//033 Functions

// function simply a piesce of code can use over and over again in our code.

function logger(){
    console.log("my name is yehia")
}
// calling /running /invoking function
logger();
logger();
logger();
logger();
*/
/*
//034 Function Declarations vs. Expressions
//function declarations
const age1=calaAge1(1999);

function calaAge1 (birthyear){
    return 2037- birthyear;
}

// console.log(age1);

// function expression /anonymous function 'function without a name'
// expression produce a value so we assign a whole value to this variable calcAge2
const calcAge2= function (birthyear){
    return 2037- birthyear;
}
/!*function are actually just values ' function not a type ' not like a string or number type,
 so as it is a value we can store them in a variables*!/
const age2= calcAge2(1999);
console.log(age1,age2)

/!*
big differences between function declarations and expression
function declarations : we can actually call function declarations before they are defined in the code"hoisting"
*!/
// can use function expression :
// - nice structure 'define all function first at the top of the code and only then i can call them '
// - every thing store in variables
*/

/*
// 035 Arrow Functions
// special form of function expression that is shorter and therefore faster to write

// function expression /anonymous function 'function without a name'
const calcAge2= function (birthYear){
    return 2037- birthYear;
}

// Arrow function
const calcAge3 =birthYear => 2037-birthYear;
const age3=calcAge3(1999)
console.log(age3)

//for now wa actually keep using mainly the normal functions , except for one -linear functions.
*/

/*
//036 Functions Calling Other Functions
function cutFruitPieces(fruit){
    return fruit*4;
}

function fruitProcessor(apples, oranges) {
    const applePieces=cutFruitPieces(apples);
    const orangePieces=cutFruitPieces(oranges);

    return `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
}
console.log(fruitProcessor(2,3))
*/

/*
//039 Introduction to Arrays
const friends =["mohamed",'mina','marwan'];
console.log(friends[friends.length-1]); //can put [] any expression that produce value between []

friends[2]='Mena';
console.log(friends)

const firstName='Yehia';
const yehia=[firstName,"Blue",2021-1999,'Web developer',friends]
console.log(yehia,yehia[4])

//Exercise
const calcAge=function (birthYear){
    return 2037-birthYear;
}

const years=[1999,1985,1950,2012,2010,2036];

const age1=calcAge(years[0])
const age2=calcAge(years[1])
const age3=calcAge(years[years.length-1])

console.log(age1,age2,age3)

const ages=[calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])]
console.log('Ages',ages)
*/

//040 Basic Array Operations (Methods)
// Add elements
const friends =["mohamed",'mina','marwan'];
friends.push('Manar'); // add to the end or array

console.log(friends)

friends.unshift('Saber'); // add to the first element of array
console.log(friends)

//remove elements
friends.pop();

console.log(friends) //last
friends.shift(); //first
console.log(friends)
console.log(friends.indexOf('mina')) //get index of mina
console.log(friends.indexOf('bob'))

// includes strict equality
console.log(friends.includes('mina')) //get value true of the value on array
console.log(friends.includes('bob')) //get value False of the value out of  array

if (friends.includes('mina')) console.log("you have a friend called Mina")