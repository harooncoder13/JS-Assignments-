// Chapter 31 to 34 (Q1)

// var currentDate = new Date();

// console.log(currentDate);

// Chapter 31 to 34 (Q2)

var now = new Date();
var monthIndex = now.getMonth();
var months = ['Jan','Feb','Mar'];
var currentMonth = months[monthIndex];

console.log(currentMonth);

var date = new Date();
var currentDay = now.getDay();
var days = ['Sun','Mon','Tue'];

// var user = prompt("Enter a day");

// if (user === 'Saturday'.toLowerCase() || user === 'Sunday'.toLowerCase()) {
//     console.log("'It's funday");
// }

var date = new Date();
var currentdays = now.getDay()
// var days = ['Sun','Mon','Tue'];

console.log(days)

var userAge = prompt('Enter your age');
var date = new Date();
var year = now.getFullYear() - userAge;

console.log(year)

var today = new Date();
var ramzanDate = new Date("8 feb 2027");
var diff = ramzanDate - today;
var daysLeft = Math.ceil(diff / (1000 * 60 * 60 *24));

console.log(daysLeft)


var ramzanDate = new Date("8 feb 2027");
var today = new Date();

var diff = ramzanDate - today;

var days = diff / (1000 * 60 * 60 * 24);
var month = diff / (1000 * 60 * 60 * 24 * 30);

console.log(Math.round(days));
console.log(Math.round(month));



