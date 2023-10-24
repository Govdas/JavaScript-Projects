var X = 10; // global variable
function Add_1() {
    var Y = 5; // local variable
    document.write(X + Y);
}
function Add_2() {
    console.log(X + Y); // intentional error, trying to used local variable
}
Add_1();
Add_2();

// if statement and time method
function time_Function() {
    if (new Date().getHours() < 18) {
    document.getElementById("time").innerHTML = "How are you today?";
    }
}

function myFunction() {
    if (20 > 10) {
    document.getElementById("hello").innerHTML = "Hello, World!";
    }
}

// else statement
function vote_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("vote").innerHTML = Vote;
}

// else if statements
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It's morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It's afternoon.";
    }
    else {
        Reply = "It's evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}