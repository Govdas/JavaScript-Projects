//function that adds onclick event to the button
function My_First_Function() {
    var str = "This is the button text!";
    document.getElementById("Button_Text").innerHTML = str;
}

//function that uses += operator
function myFunction() {
    var sentence = "I am learning"; //creating variable
    sentence += " a lot from this book!"; //using += operator to add to the variable
    document.getElementById("concat").innerHTML = sentence;
}