'use strict';
/*LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console
//require 1 create function
function describeCountry(country,population,capitalCity){
    return(`${country} has ${population} million people, and its capital city is ${capitalCity}`)
}
// require 2
const egyptDescribtion=describeCountry("Egypt",101,"cairo");
const finlandDescribtion=describeCountry("Finland",6,"Helsinki");
const americaDescribtion=describeCountry("America",331," Washington");
// print result on console
console.log(egyptDescribtion,"\n",finlandDescribtion,"\n",americaDescribtion);
*/