/*  Values and variables
let country="Egypt"
let continent="Africa"
let populations=101 +" M"
let myData=`I am from ${country} in ${continent} with population ${populations}`
console.log(myData) */

/*LECTURE: Data Types

1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console

let country = "Egypt"
let island = true;
let populations = 101
let language;
console.log(island, populations)
// console.log(populations)
console.log(country)
console.log(language)


LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens
let language;
language = "Arabic";
const birth = 1991;
//birth = 2000;//error Assignment to constant variable.

LECTURE: Basic Operators
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'

let populationOfMyCountry = 101
let halfPopulation = 101 / 2;
console.log(" people would live in each half", halfPopulation, "M")
populationOfMyCountry++;
let finLand = 6;
console.log("Does your country have more people than Finland?", populationOfMyCountry > finLand)
let averagePopulationOfCountry = 33
console.log("Does your country have less people than the average country?", averagePopulationOfCountry > populationOfMyCountry)
let description = 'Portugal is in Europe, and its 11 million people speak portuguese'
console.log("Description: " + description)

LECTURE: Strings and Template Literals
1. Recreate the 'description' variable from the last assignment, this time
using the template literal syntax

const description = `Prtugal is in Europe, and its 11 million people speak portuguese`
console.log("Description: " + description)
*/
/* LECTURE: Taking Decisions: if / else Statements
1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original
//solution
const population = 70;
if (population > 33) {
    console.log("Portugal's population is above average")
} else {
    console.log(`Portugal's population is ${33 - population} million below average`)
}
*/
/* LECTURE: Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;
2. Execute the operations to check if you were right
// Solution
console.log("'9' - '5'", '9' - '5'); //expected value  4
console.log("'19' - '13' + '17'", '19' - '13' + '17'); //expected value '617'
console.log("'19' - '13' + 17", '19' - '13' + 17);//expected value 23
console.log("'123' < 57", '123' < 57);//expected value false
console.log("5 + 6 + '4' + 9 - 4 - 2", 5 + 6 + '4' + 9 - 4 - 2);//expected value 1143 */

/* LECTURE: Equality Operators: == vs. ===
1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening? // input str and compare it with strict equal === with number get false every time enless convert it to same data type
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
8. Reflect on why we should use the === operator and type conversion in this
situation // to avoid make bugs
// Solution
// const numNeighbours = prompt('How many neighbour countries does your country have?');
if (Number(numNeighbours) === 1) {
    console.log("Only 1 border!");
} else if (Number(numNeighbours) > 1) {
    console.log('More than 1 border');
}
else { console.log("No borders") }
*/

/*LECTURE: The switch Statement
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'
// Solution
i = 0
while (i < 8) {
    const inputLanguage = prompt("Please enter your language")
    switch (inputLanguage) {
        case "mandarin":
        case "chinese":
            console.log('MOST number of native speakers!')
            break;
        case "spanish":
            console.log('2nd place in number of native speakers')
            break;
        case "english":
            console.log('3rd place')
            break;
        case "hindi":
            console.log('Number 4')
            break;
        case "arabic":
            console.log('5th most spoken language')
            break;
        default:
            console.log('Great language too :D')
            break;
    }
    i++
}

/* LECTURE: The Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original
// solution
const population = 50;
const countryPopulation = population >= 33 ? console.log("Portugal's population is above average") : console.log("Portugal's population is below average")*/