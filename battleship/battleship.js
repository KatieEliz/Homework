var randomLoc = Math.floor(Math.random() * 5);  //Math.floor rounds number down to nearest interger value//
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;  //Won't have avalue until user makes a guess, until then it will have the value undefined//
var hits = 0;
var guesses = 0;
var isSunk= false;

while(isSunk == false) {     //While the ship is not sunk, using a condtional test to determine wether or not to keep looping. In this case testing if isSunk is still false//
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");   //Get the users guess//
    if (guess < 0 || guess > 6) {    // If guess is less than 0 or grater than 6 (invalid)..//
        alert("Please enter a valid cell number!");   //Tell user to enter a valid number//
    } else {
        guesses = guesses + 1;  //Add one to guesses (score count)//
        if (guess == location1 || guess == location2 || guess == location3) {   //If the users guess matches one of these locations//
            alert("HIT!");   //Alert user//
            hits = hits + 1;  //Add one to number of hits//
            if (hits == 3) {     //If number of hits is 3 (length of battleship)//
                isSunk = true;   //isSunk is true//
                alert("You sank my battleship!");    //Tell user he sunk the battleship//
            }
        } else {
            alert("MISS!");   //If no conditional is true alert miss//
        }
    }
}
var stats = "You took " + guesses + " guesses to sink the battleship," + " which means your shotting accuracy was " + (3/guesses);
alert(stats);