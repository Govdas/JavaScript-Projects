//window.alert() to appear as a pop-up alert
//Math.random() to return a random number  between 0 and 1
//Math.round method to return a rounded value to its nearest integer
window.alert(Math.round(Math.random()));

//To return a random number between 0 and 20 as a pop-up alert
window.alert(Math.round(Math.random() * 20));

//Increment operator is written as ++
var X = 5;
X++;
document.write("Increment example: 5++ = " + X);

//Decrement operator is written as --
var Y = 5.25;
Y--;
document.write("<br><br>Decrement example: 5.25-- = " + Y);

//function using addition
function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

//function using subtraction
function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + subtraction;
}

//function using multiplication
function multiplication() {
    var multiply = 123 * 4;
    document.getElementById("Math3").innerHTML = "123 x 4 = " + multiply;
}

//function using division
function division() { //creating and naming a function
    var divide = 25 / 5; //creating variable and setting value
    document.getElementById("Math4").innerHTML = "25 / 5 = " + divide; //Changing the HTML content of an element with id="math4"
}

//function using multiple operations
function multiple_operations() {
    var multi_operations = (1 + 2) * 10 / 2 - 5;
    //To concatenate (connect) a string, use the + operator as follows:
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10,"
    + " divided in half and then subtracted by 5 equals " + multi_operations;
}

//function using modulus (%) operator
function modulus_operator() {
    var modulus = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6"
    + " you have a remainder of: " + modulus;
}

//function using unary operator called a “negation operator”
function negation_operator() {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}

