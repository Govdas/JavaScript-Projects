//utilizing concat() Method to connect strings
function Connect() {
    var Part_1 = "I have ";
    var Part_2 = "made this ";
    var Part_3 = "into a complete ";
    var Part_4 = "sentence.";
    var Connected_sentence = Part_1.concat(Part_2, Part_3, Part_4);
    document.getElementById("Concatenate").innerHTML = Connected_sentence;
}

// utilizing slice() method
function slice_Method() {
    var Sentence = "Which way to turn, left or right, John thought.";
    var Sliced = Sentence.slice(34,38);
    document.getElementById("Section").innerHTML = Sliced;
}

// utilizing toUpperCase() Method, which converts a string to uppercase letters
function Upper_Case() {
    var text = "Hello, World!";
    var result = text.toUpperCase();
    document.getElementById("Upper").innerHTML = result;
}

// utilizing search() Method, which returns the position of the first match
function search_Method() {
    var text = "Mr. Blue has a blue house";
    var position = text.search("Blue");
    document.getElementById("Search").innerHTML = position;
}

// utilizing toString() Method to return a number as a string
function string_Method() {
    var X = 182;
    document.getElementById("Number").innerHTML = X.toString();
}

// utilizing toPrecision() Method, which formats a number to a specified length
// (rounding the result where necessary)
// Decimal point and nulls are added (if needed), to create the specified length
function precision_Method() {
    var X = 13.3714;
    // if selected length is 3, it would return 13.4, length 4 will return 13.37
    document.getElementById("Precision").innerHTML = X.toPrecision(4);
}

// utilizing toFixed() Method
// toFixed() converts a number to a string, rounded to a specified number of decimals
function toFixed_Method() {
    var num = 5.56789;
    var X = num.toFixed(); // will return 6
    var Y = num.toFixed(2); // will return 5.57
    document.getElementById("toFixed").innerHTML = X + " and " + Y;
}

// utilizing valueOf() Method, which returns the primitive value of a string
// and does not change the original string
function valueOf_Method() {
    var text = "Hello World!";
    document.getElementById("value").innerHTML = text.valueOf();
}