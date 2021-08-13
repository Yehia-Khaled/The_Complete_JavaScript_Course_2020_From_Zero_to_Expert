// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*/!* 055 Setting up Prettier and VS Code *!/
//prettier :is an opinionated code formater ,which means that  it makes assumptions about how good code should look like, make your code is nicely formatted .
/!*
// used extentions
1-Prettier - Code formatter
2-Auto close tag
3-Auto rename tag
4-ESLint
5-image preview
6-monokai pro
7-setting sync
8-TODO Highlight
*!/

const x = 23;

const calcAge = birtheyear => console.log(2037 - birtheyear);
calcAge(1999);
console.log();*/

/*/!* 056 Installing Node.js and Setting Up a Dev Environment *!/
console.log('Hello yehia');*/

//057 Learning How to Code
//just keep going ,keep coding, and keep building.

//058 How to Think Like a Developer_ Become a Problem Solver!

//059 Using Google, StackOverflow and MDN

/*//problem 1
/!*we work for a company building a smart home thermometer. Our most recent task is this : "
* given an array of temperatures of one day, calculate the temperature amplitude.keep in mind that
* sometimes there might ba a sensor error*!/

const temepratures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

// 1) understanding the problem
// - what is temp amplitude? Answer: difference between highest and lowest temp
// - how to compute max and min temperatures ?
// - what's sensor error? And what do ?

// 2) Breaking up into sub-problems
// - how to  ignore errors?
// - find max value in temp array
// - find min value in temp array
// - subtract min from max (amplitude) and return it

const calcTempAmplitudeP1 = function (temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        if (typeof temps[i] !== 'number') continue; //ignore errors
        if (temps[i] > max) max = temps[i];//get max value from array
        if (temps[i] < min) min = temps[i];//get min value from array

    }

    return max - min;
};
// console.log(calcTempAmplitude([7, 4, 3]))
const amplitudeP1 = calcTempAmplitudeP1(temepratures);
console.log(amplitudeP1)*/

//problem 2
//function should now receive 2 arrays of temps

// 1) understanding the problem
//- with 2 arrays ,should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// -how to merge 2 arrays ?
const temperature1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5, 100]
const temperature2 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]
//concatenate two array


const calcTempAmplitudeP2 = function (temp1, temp2) {
    const temps = temp1.concat(temp2)
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        if (typeof temps[i] !== 'number') continue; //ignore errors
        if (temps[i] > max) max = temps[i];//get max value from array
        if (temps[i] < min) min = temps[i];//get min value from array

    }
    console.log(`max = ${max} , min = ${min}`)
    return max - min;
};
console.log(calcTempAmplitudeP2([7, 4, 3], [50, 0, -1])) //test function

const amplitudeP2 = calcTempAmplitudeP2(temperature1, temperature2);
console.log(`Amplitude of temperature = ${amplitudeP2}`)