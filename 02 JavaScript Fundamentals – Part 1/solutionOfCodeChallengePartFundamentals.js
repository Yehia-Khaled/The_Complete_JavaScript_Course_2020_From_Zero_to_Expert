/* Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall. */
// declare variables names
var johnMass, markMass, markHight, johnHeight;
//test some data
/*
//TODO testData 1
//for mark
markHight = 1.69;
markMass = 78;
//for john
johnHeight = 1.95;
johnMass = 92;

//TODO test Data 2
//for mark
markHight = 1.88;
markMass = 95;
//for john
johnHeight = 1.76;
johnMass = 85;

// calculation using formula
const BMIForMark = (markMass) / (markHight ** 2); //calculate BMI  for mark
console.log("Mark BMI", BMIForMark) //print result for BMI mark on console
const BMIForJohn = (johnMass) / (johnHeight ** 2); //calculate BMI  for john
console.log("john BMI", BMIForJohn) //print result for BMI john on console
//comparison for higher BMI
const markHigherBMI = BMIForMark > BMIForJohn;
// print comparison result on console
console.log("information about whether Mark has a higher BMI than John", markHigherBMI);
/**Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀
if (BMIForMark > BMIForJohn) {
    console.log("Mark's BMI is higher than John's!")
    console.log(`Mark's BMI (${BMIForMark}) is higher than John's (${BMIForJohn})!`)
}
else {
    console.log("John's BMI is higher than Mark's!")
    console.log(`John's BMI (${BMIForJohn}) is higher than Mark's (${BMIForMark})!`)
}
  */
/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
 */
/*
// function to calculate average
function average(a, b, c) {
    return (a + b + c) / 3;
}

//calculate average score for given data
const avrgDolphinsScore = average(96, 108, 89);
const avrgKoalasScore = average(88, 91, 110);

//print average score for every team
console.log("Average score for Dolphins", avrgDolphinsScore);
console.log("Average score for Koalas", avrgKoalasScore);

// 2 compare teams average
if (avrgDolphinsScore === avrgKoalasScore) {
    console.log("Teams draw!");
} else if (avrgDolphinsScore > avrgKoalasScore) {
    console.log("Dolphins Team Wins");
} else {
    console.log("Koalas Team Wins");
}

// require 3 bonus 1
const dolphineScoreBonus1 = [97, 112, 101];
const KoalasScoreBonus1 = [109, 95, 123];
var maxScorefordolphineB1 = 0;
var maxScoreforKoalasB1 = 0;
//detrmine max score fi every team
for (i = 0; i < dolphineScoreBonus1.length; i++) {
    //max score for dolphins
    //    console.log("data  dolphine array", dolphineScoreBonus1[i])
    if (dolphineScoreBonus1[i] > maxScorefordolphineB1)
        maxScorefordolphineB1 = dolphineScoreBonus1[i];
    console.log("maxScorefordolphineB1", maxScorefordolphineB1);
}

for (i = 0; i < KoalasScoreBonus1.length; i++) {
    //max score for Koalas
    if (KoalasScoreBonus1[i] > maxScoreforKoalasB1)
        maxScoreforKoalasB1 = KoalasScoreBonus1[i];
    console.log("maxScoreforKoalasB1", maxScoreforKoalasB1);
}
// max score at least 100
if (
    maxScorefordolphineB1 > maxScoreforKoalasB1 &&
    maxScorefordolphineB1 > 100
) {
    console.log("Dolphene team get bonus1");
} else if (
    maxScoreforKoalasB1 > maxScorefordolphineB1 &&
    maxScoreforKoalasB1 > 100
) {
    console.log("Koalas team get bonus1");
} else {
    console.log("No team get bonus1");
}

// Requre 3 bonus 2
// data bonus 2
const avrgDolphinsScoreB2 = average(97, 112, 101);
const avrgKoalasScoreB2 = average(109, 95, 106);
// print average to console
console.log("Average score for Dolphins B2", avrgDolphinsScoreB2);
console.log("Average score for Koalas B2", avrgKoalasScoreB2);

if (
    avrgDolphinsScoreB2 === avrgKoalasScoreB2 &&
    avrgKoalasScoreB2 >= 100 &&
    avrgDolphinsScoreB2 >= 100
) {
    console.log("both team wins the trophy !!");
} else if (
    avrgDolphinsScoreB2 > avrgKoalasScoreB2 &&
    avrgDolphinsScoreB2 >= 100
) {
    console.log("Dolphins Team Wins the trophy ");
} else if (
    avrgKoalasScoreB2 > avrgDolphinsScoreB2 &&
    avrgKoalasScoreB2 >= 100
) {
    console.log("Koalas Team Wins the trophy ");
} else {
    console.log("no team wins the trophy ");
} */
/* Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉 */

// require 1 calculate the tip
//usimg if else statement
let calculatedtip;
const bill = prompt("Please Enter your bill");
/* if (bill > 20 && bill < 300) {
    console.log(`Tip is 15%`)
} else {
    console.log(`Tip is 20%`)
} */
// using ternary operators
const tip1 = bill >= 50 && bill < 300 ? console.log(`Tip is ${bill * 0.15}`) : console.log(`Tip is ${bill * 0.2}`)

// Require 2
const tip2 = bill >= 50 && bill <= 300 ? console.log(`The bill is ${bill} ,the tip is ${calculatedtip = (bill) * (15 / 100)},and the total value is ${((Number(bill) + Number(calculatedtip)))} `) : console.log(`The bill is ${bill},the tip is ${calculatedtip = (bill) * (20 / 100)} ,and the total value is ${(Number(bill) + Number(calculatedtip))}`)