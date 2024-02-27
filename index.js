/*
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName)
}

greet('Serdar', 'Durmus');
*/

/*
Task 1
function summen() {
    var a = parseFloat(prompt("Insert the first number:"));
    var b = parseFloat(prompt("Insert the second number:"));
    var c = parseFloat(prompt("Insert the third number:"));
    var sum = a + b + c;
    return sum;
}
var result = summen();
document.write("The sum is: " + result);
*/

/*
Task 2
function Comparison(n1, n2) {
    if (n1 > n2) {
        return `${n1} is greater than ${n2}.`;

    } else if (n2 > n1) {
        return `${n1} is less than ${n2}.`;

    } else {
        return `${n1} and ${n2} are equal.`;
    }
}

function n(promptMessage) {
    return +prompt(promptMessage);
}
var f = n("Enter First Number");
var s = n("Enter Second Number");
document.write(Comparison(f, s));
*/

/*
Task 3
function calculator() {
    var first, second, result, mathmaticalSymbols;
    first = prompt("Type first number");
    second = prompt("Type second number");
    mathmaticalSymbols = prompt("Type a math symbol");

    if (first !== null && second !== null && mathmaticalSymbols !== null) {
        if (mathmaticalSymbols === "+") {
            result = Number(first) + Number(second);
        } else if (mathmaticalSymbols === "/") {
            result = Number(first) / Number(second);
        } else if (mathmaticalSymbols === "*") {
            result = Number(first) * Number(second);
        } else if (mathmaticalSymbols === "-") {
            result = Number(first) - Number(second);
        } else {
            result = "Invalid math symbol";
        }
    } else {
        result = "Input(s) is empty";
    }

    return result;
}

document.getElementById("demo").innerHTML = calculator();
*/

/*
Task 4
function generateRandomBetween(minimum, maximum) {
    return Math.random() * (maximum - minimum) + minimum;
}

const minimum = parseFloat(prompt("Insert the minimum number"));
const maximum = parseFloat(prompt("Insert the maximum number"));

const randomNumber = generateRandomBetween(minimum, maximum);
console.log("The arbitrarily number between " + minimum + " and " + maximum + " is " + randomNumber + ".");
*/

/*
Task 5
function sort(params) {
    return params.sort();
}

let array = [5,4,3,33,1]
console.log(sort(array));
*/

/*
Task 6
Source: https://www.youtube.com/watch?v=nC3_QqYOfxs
var numbers = [`Røyken VGS`, `Røyken VGS`, `Røyken VGS`];
var users = [`Røyken VGS`, `Røyken VGS`, `Røyken VGS`];
var age = [`Røyken VGS`, `Røyken VGS`, `Røyken VGS`];
var email = [`Røyken VGS`, `Røyken VGS`, `Røyken VGS`];


var text = document.getElementById(`text`);
var table = '<table align="center"><thead><tr><td>Røyken VGS</td><td>Røyken VGS</td><td>Røyken VGS</td><td>Røyken VGS</td></tr></thead><tbody>';

for(var i = 0; i < users.length; i++) {
    table += `<tr><td>` + numbers[i] + `</td><td>` + users[i] + `</td><td>` + age[i] + `</td><td>` + email[i] + `</td></tr>`;
}

table += '</tbody><table>';


text.innerHTML = table;
*/

/*
Task 7
function biggest() {
    var numb1 = parseFloat(prompt("Enter the first number"));
    var numb2 = parseFloat(prompt("Enter the second number"));
    var numb3 = parseFloat(prompt("Enter the third number"));

    var biggest1 = numb1;
    if (numb2 > biggest1) {
        biggest1 = numb2;
    }
    if (numb3 > biggest1) {
        biggest1 = numb3;
    }

    return "The biggest number is  " + biggest1;
}

document.write(biggest());
*/

// I don't understand the task 8 unfortunately //