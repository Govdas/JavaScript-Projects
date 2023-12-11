// While Loop
function Call_Loop() {
    var Digit = "";
    let X = 1; // utilizing the let keyword
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

// For Loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Array
function array_Function() {
    document.getElementById("Array").innerHTML = "Adam is learning how to play a " +
        Instruments[0] + ".";
}

//Constant
function constant_Function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.type = "piano";
    Musical_Instrument.price = "$2k"
    document.getElementById("Constant").innerHTML = "The price of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price + ".";
}

// Object
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
}
document.getElementById("Car_Object").innerHTML = car.description();