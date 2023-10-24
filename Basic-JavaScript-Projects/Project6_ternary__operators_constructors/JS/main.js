//=============================================================================
//                          Ternary operator "?"
//=============================================================================

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    //utilizing ternary operator "?"
    //if statement: Height < 52 is true, it will display a left string
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}


function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote":"You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
}

//=================================== END ======================================


//=============================================================================
//                           Keywords and Constructors
//=============================================================================

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}
function myFunction2() {
    document.getElementById("New_and_This").innerHTML =
    "Jack owns a " + Jack.Vehicle_Color + " " + Jack.Vehicle_Make + " " +
    Jack.Vehicle_Model + ", manufactured in " + Jack.Vehicle_Year;
}

function Person(First, Last, Age) {
    this.firstName = First;
    this.lastName = Last;
    this.age = Age;
}
var P1 = new Person("John", "Smith", 28);
var P2 = new Person("Ally", "Kek", 31);
function myFunction3() {
    document.getElementById("New_and_This2").innerHTML =
    P1.firstName + " and " + P2.firstName + " are friends.";
}

//=================================== END ======================================


//=============================================================================
//                             Nested Functions
//=============================================================================

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

//=================================== END ======================================