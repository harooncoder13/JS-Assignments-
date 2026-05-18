// Chapter 21 to 25 (Q1)

// let userFirstName = "Haroon"
// let userLastName = "Razzaq"
// let fullName = "HaroonRazzaq"

// console.log (fullName)

// Chapter 21 to 25 (Q2)

// let userFavouriteMobilePhoneModel = prompt("Enter your favourite mobile phone model")

// console.log(userFavouriteMobilePhoneModel.length)
// alert ("My favourite phone is:" + "Samsung Galaxy S6 Edge Plus" + "\nLength of string is:" + 28)

// Chapter 21 to 25 (Q3)


// let str = "Pakistani"

// let indexOfN = str.indexOf('n')

// console.log ("String:" + "Pakistani")
// console.log ("index Of 'n':" + 7)

// Chapter 21 to 25 (Q4)

// let str1 = "Hello World"

// let indexofL = str1.lastIndexOf ('l')

// console.log ("String:" + "Hello World")
// console.log ("index Of 'l':" + 9)


// Chapter 21 to 25 (Q5)

// let word = "Pakistani"
// let charatindex3 = word[3]

// console.log ("string:" + word + "\n + char at index 3:" +" i")

// Chapter 21 to 25 (Q6)

var userFirstName = 'Haroon'



// Chapter 21 to 25 (Q7)

// let originalCity = "Hyderabad"
// let newCity = originalCity.replace("Hyder" , "Islam");

// console.log ("city: " + "Hyderabad" + "\n + After replacement: + Islamabad")

// Chapter 21 to 25 (Q9)

var str = "472";


// Chapter 21 to 25 (Q10)


// let user = prompt("enter")

// console.log (user.toUpperCase())


// Chapter 21 to 25 (Q12)

// let num = 35.36;
// let numString = num.toString();
// let finalResult = numString.replace(".", "");

// console.log ("Number:" + 35.36);
// console.log ("Result:" + "3536")


// Chapter 21 to 25 (Q14)

// var arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var userSearch = prompt('ENter your fav');

// if (userSearch === arr) {
//     alert("available");
// } else (userSearch != arr) {
//     alert("not available");
// }


// Chapter 21 to 25 (Q15)

var userInput = prompt("Enter a password alphabet and numbers");
var pass = "abcdef";

if (userInput === pass) {
    alert(login);
} else if (userInput === num) {
    alert("not allow");
} 











// let university = "University of Karachi";
// let convertArray = university.split(" ");

// console.log ("Original String " + "University of Karachi");
// console.log ("Converted Array" + " ");
// console.log ("first element " + convertArray[0]);





// var firstName = 'Haroon';
// var lastName = 'Razzaq';
// var fullName = [];

// for (var i = 0; i < firstName.length; i++) {
//     for (var j = 0; i < lastName.length; j++) {
//         fullName.push(firstName[i] + fullName[j]);
//     }
// }
// console.log(fullName(i,j))




// var cityToCheck = prompt("Enter Your City");
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ['KARACHI', 'LAHORE','ISLAMABAD','QUETTA','PESHAWAR'];

// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//       alert("It's one of the cleanest cities")
//     }
// }



// var month = prompt('Enter a month');
// var charsInMonth = month.length;

// if (charsInMonth > 3) {
//     monthAbbrev = month.slice(0,3);
// }

// console.log(monthAbbrev);





// var str = prompt('Enter some text');
// var numChars = str.length;

// for (var i = 0; i < numChars; i++) {
//     if (str.slice(i, i + 2)) === " ") {
//        alert('No double spaces!');
//     }
// }





// var text = 'World War II'
// var firstChar = text.indexOf('World War II');

// if (firstChar !== -1) {
//     text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12)
// }

// console.log(text)






// for (var i = 0; i < text.length; i++) {
//     if (text.charAt(i === "!")) {
//         alert('Exclamation point found!')
//     }
// }