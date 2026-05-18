// chapter 6 (Q1)

// let a = 10;
// let output = "Result:\n\n"

// output += "The value of a is: " + a + "\n";

// // // pre-increment (++)

// output += "The value of ++a is: " + (++a) + "\n";
// output += " Now The value of a is: " + a + "\n";

// // console.log (output)

// // post-increment (++)

// output += "The value of a++ is: " + (a++) + "\n";
// output += " Now The value of a is: " + a + "\n";

// // pre-decrement (--)

// output += "The value of --a is: " + (--a) + "\n";
// output += " Now The value of a is: " + a + "\n";

// // post-decrement (--)

// output += "The value of a-- is: " + (a--) + "\n";
// output += " Now The value of a is: " + a + "\n";

// console.log (output)

// chapter 6 (Q2)

// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
//               1  -  0  +  1  +  1
//                   1    +     2
//                        3

// console.log(result)       

// chapter 6 (Q3)

// var userName = prompt("Enter username");

// alert(userName);

// chapter 6 (Q4)

// var number = prompt ("Enter a number from a multiplication table:", 5);

// if (number ==+ ""  || number === null) {
//     number = 5;
// }

// document.write("<h2>Multiplication Table of " + number + "</h2>");

// for (var i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }

// chapter 6 (Q5)

// let sub1 = "Maths"
// let sub2 = "Urdu"
// let sub3 = "Isl"

// let totalMarks = 100 * 3;

// let firstSubObtainedMark = 58;
// let secSubObtainedMark = 87;
// let thirdSubObtainedMark = 77;

// let totalObtainedMarks = (firstSubObtainedMark + secSubObtainedMark + thirdSubObtainedMark)

// let percentage = (totalObtainedMarks / totalMarks) * 100

// console.log("Total Marks --->",totalMarks)
// console.log("Total Obtained Marks --->",totalObtainedMarks)
// console.log("Total Percentage --->",percentage + "%")


// document.writeln(` <table border="2">
//         <tr>
//             <th>Subject</th>
//             <th>Total Marks</th>
//             <th>Obtained Marks</th>
//             <th>Percentage</th>
//         </tr>
//         <tr>
//             <td>${sub1}</td>
//             <td>100</td>
//             <td>${firstSubObtainedMark}</td>
            
//         </tr>

//         <tr>
//             <td>${sub2}</td>
//             <td>100</td>
//             <td>${secSubObtainedMark}</td>
            
//         </tr>
//         <tr>
//             <td>${sub3}</td>
//             <td>100</td>
//             <td>${thirdSubObtainedMark}</td>
            
//         </tr>
//         <tr>
//             <th>Total</th>
//             <td>${totalMarks}</td>
//             <td>${totalObtainedMarks}</td>
//             <td>${percentage}%</td>
            
            
//         </tr>
       
//     </table>`)