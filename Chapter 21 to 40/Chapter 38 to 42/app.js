// Chapter 38 to 42 (Q1)

// function power(a, b) {
//     let result = 1;
//     for (let i = 0; i < b; i++) {
//         result *= a;
//     }
//     return result;
// }

// console.log(power(2, 3));
// console.log(power(5, 2));

// Chapter 38 to 42 (Q2)

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return year + ' is a leap year.';
//     } else {
//         return year + 'is not a leap year.';
//     }
// }

// console.log(isLeapYear(2012));
// console.log(isLeapYear(2016));
// console.log(isLeapYear(2023)); 

// Chapter 38 to 42 (Q5)

// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }

//     return -1;
// }

// console.log(customIndexOf("karachi", "a"));
// console.log(customIndexOf("apple", "p"));
// console.log(customIndexOf("world", "z"));

// Chapter 38 to 42 (Q6)

// function removeVowels(sentence) {
//     let result = "";
//     let vowels = "aeiou";

//     for (let i = 0; i < sentence.length; i++) {
//         if (!vowels.includes(sentence[i])) {
//             result += sentence[i];
//         }
//     }
//     return result;
// }

// let myText = "Hello World";
// console.log(removeVowels(myText));



// function removeVowels(sentence) {
//     let result = "";
//     let vowels = "aeiou";

//     for (let i = 0; i < sentence.length; i++) {
//         if (!vowels.includes(sentence[i])) {
//             result+= sentence[i];
//         }
//     }
//     return result;
// }

// let myText = "hello world";
// console.log(removeVowels(myText));



// function removeVowels(sentence) {
//     let result = '';
//     let vowels = 'aeiou';

//     for (let i = 0; i < sentence.length; i++) {
//         if (!vowels.includes(sentence[i])) {
//             result += (sentence[i]);
//         }
//     }
//     return result;
// }

// let myText = 'hello world';
// console.log(removeVowels(myText));