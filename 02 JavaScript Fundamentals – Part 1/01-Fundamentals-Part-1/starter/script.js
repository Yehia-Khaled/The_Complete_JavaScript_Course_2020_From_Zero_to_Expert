/* let js = "amazing";
if (js === "amazing") alert("Js is Amazing")

console.log(10 + 20 - 50 * 20); */
/* 012 Data types*/
/* let number =21;
let string="i am string"
console.log(typeof(number))
console.log(typeof(string)) */

/* console.log("❤❤ 💋😘q(≧▽≦q)") */
/* lecture 26 Switch */
/* const day = "sat ";

switch (day) {
    case "monday":
        console.log("Study in monday")
        console.log("Eat well!")
        break;
    case "tuesday":
        console.log("Study will for exam in tuesday")
        console.log("eat well😊")
        break;
    case "wednesday":
        console.log("Study will in wednesday")
        console.log("prepare fo exam")
        break;
    case "thursday":
        console.log("Study in thursday")
        console.log("Eat well!")
        break;
    case "friday":
        console.log("sleep well in  friday")
        console.log("Eat well!")
        break;
    case "saturday":
        console.log("Study in saturday")
        console.log("Eat well!")
        break;
    case "sunday":
        console.log("Study in sunday ")
        console.log("drink water well!")
        break;
    default:
        console.log("Not a valid day😒!!")
} */
/* 028 The Conditional (Ternary) Operator  */
let age = prompt("Enter your age");
age >= 18 ? console.log("i like to drink coffe☕") : console.log('i like to drink water💧')
const drink = age >= 18 ? "coffe☕" : "Water💧";
console.log("Your drink", drink)
alert(`Your drink ${drink}`)
console.log(`I want to drink ${age >= 18 ? "coffe☕" : "Water💧"}`)