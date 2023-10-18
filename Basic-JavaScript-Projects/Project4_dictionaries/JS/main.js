//function as a dictionary
function dictionary_1() {
    var Animal = {
        Species:"Cat",
        Color:"White",
        Breed:"Persian Long Hair",
        Age:4,
        Sound:"Meow"
    };
    //delete operator used to remove a key-value pair
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}