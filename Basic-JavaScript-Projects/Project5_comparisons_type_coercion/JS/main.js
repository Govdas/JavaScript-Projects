//==============================================================================
//                           Dev Tools CONSOLE CODE
//==============================================================================

//console.log() method to see the result of the math operation in dev tools, console tab
console.log(2 * 5);

//using Boolean logic and the console.log() method to display false
console.log(2 > 5);

//=================================== END ======================================



//==============================================================================
//                         document.write() method CODE
//==============================================================================

//document.write() method using "Type of" operator
document.write(typeof "Word"); //we will get output "string"

document.write("<br><br>"); //to make an empty line between outputs

document.write(typeof 3); //we will get output "number"

document.write("<br><br>");

//Type Coercion
document.write("10" + 5); //the output will be 105

//boolean logic to display true outcome
document.write("<br><br>5 > 2 = " + (5 > 2));

//boolean logic to display false outcome
document.write("<br><br>20 < 10 = " + (20 < 10));

//double equal signs (==) to get an outcome, true or false
document.write("<br><br>2 x 5 equal to 5 + 5? " + ((2 * 5) == (5 + 5)));

document.write("<br><br>4 equal to 7? " + (4 == 7));

//                    Triple Equal Signs Assignment
//assigning variables to value and data type
A = 10;
B = 10;
C = "8";
D = "10";
//utilizing triple equal signs(===) to return "true" and "false" in a few ways
document.write("<br><br>" + (A === B));
document.write("<br>" + (A === C)); // note: each "<br>" is used to render code,
document.write("<br>" + (A === D)); //                 one line below in HTML.
document.write("<br>" + (C === D)); // \n would do the same, but in source code

//                        AND, OR and NOT Operators Assignment
// "&&" stands for AND
document.write("<br><br>" + (2 < 3 && 3 > 2));
document.write("<br>" + (5 == 5 && 2 > 2));
// "||" stands for OR
document.write("<br>" + (7 < 10 || 7 > 10));
document.write("<br>" + (5 == 2 || 2 > 5));
// "!" stands for NOT
document.write("<br><br>utilizing \"NOT\" operator: " + !(20 > 10) + (" and ") + !(2 > 5));

//=================================== END ======================================



//==============================================================================
//                  CLICKABLE (onclick) event handler code
//==============================================================================

//function to get an output of NaN (short for “Not a Number”)
function NaN_Function() {
    document.getElementById("Test").innerHTML = 0 / 0; //The result would be NaN because you can’t divide 0 by 0.
}

//checking whether or not something is a number by using the isNaN() function
function isNaN_True() {
    document.getElementById("Test2").innerHTML = isNaN('This is a string');
}

function isNaN_False() {
    document.getElementById("Test3").innerHTML = isNaN('007');
}

//high enough number to get infinity outcome
function infinity() {
    document.getElementById("Test4").innerHTML = 2E310;
}

//to get minus infinity outcome
function infinity_minus() {
    document.getElementById("Test5").innerHTML = -2E310;
}

//=================================== END ======================================