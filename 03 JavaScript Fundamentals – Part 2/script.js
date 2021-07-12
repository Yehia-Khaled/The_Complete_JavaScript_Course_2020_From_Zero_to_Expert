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