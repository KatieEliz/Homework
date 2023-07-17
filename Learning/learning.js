//Always start with the var keyword when declaring a varibal , next give the variable a name, optionally we assign a value to the variable y adding an equal sign followed by the value, lastly end an assignment staement with a semicolon//

var winners = 2; //this statement declares a variable named winners and assgins a numeric value of 2 to it//

var name = "Duke"; //This statement assgins a string of characters to the varibale name//

var isEligible = flase; //This statement assings the value false to the varibale isEligible. We call true/false values 'booleans' DON'T PUT "" AROUND BOOLEANS//

//To create a varibale without an inital value (assign value later on) we can write it like this//
var losers; //By leaving off the equals sign and value your delacring the varaible for later use//

//Start your varibales with a letter, underscore or dollar sign//

//Each statement ends in a semicolon;// //White space does not matter! (almost everywhere)// //Surround strings of characters with quotes (any work but use the same throughout)//

var total = price - (price * (disount / 100)); //This is an expression which evaluates to a price reduced by a discount that is a percentage of that price. So if the price is 10 and the discount is 20, we get a result of 8//

"Dear" + "reader" + "," //This is also an expression, adding all the strings together to form a new string "Dear reader,"//

//Boolean expresssions// 
age < 14 //If a person age is less than 14 this is true, otherwise it's false//
cost >= 3.99 //If the cost is 3.99 or greater, this is true, otherwise false//
animal == "bear" //This is true when the aniaml contains the string "bear"//

//while loop//
var scoops =5;
while (scoops > 0) {
    document.write("another scoop!");
    scoops = scoops -1;
}
document.write("Life without ice cream isn't the same");
//This while loop contains a boolean expression that we call contiional. If the conditional is true, everything in the code block (everything within{}) is executed and if it is true, then after we execute the code block we loop back around to do it all again, if its false we are done//
//Beacuse the conditional is true we start executing the block of code// 
//The next statement (scoops = scopps -1;) subtracts one from the number of scoops and then sets scoops to that new value, four//
//That was the last statement in the block so we loop back up to the conditional and start over, evaluating again, this time scoops is four BUT that's still more than 0 so subtract 1 again//
//Once all scoops are gone, we execute "Life without ice cream isn't the same"//

if (scoops < 3) {
    alert("Ice cream is running low");
}
//if statements executes its code block only if a conditional test is true//
//The conditional test (scoops < 3) tests to see if we are down to fewer than three scoops and if we are then we execute the if statement's code block//

if (scoops >=5) {
    alert("Eat faster, the ice cream is going to melt!");
} else if (scoops < 3) {
    alert("Ice cream is running low!");
}
//Add as many tests with else if as needed, each with its own associated code block that will be executed when the condtion is true// e.g.
if (scoops >=5) {
    alert("Eat faster, the ice cream is going to melt!");
} else if (scoops < 3) {
    alert("Ice cream is running low!");
} else if (scoops == 2) {
    alert("Going once!");
}else if (scoops == 1) {
    alert("Going twice!");
} else if (scoops == 0) {
    alert("Gone!");
}else {
    alert("Still lots of ice cream left, come and get it.");
}


//console.log//
var message = "Howdy" + "" + "partner";
console.log(message);

//Putting it all together//
var word = "bottles";
var count = 99;
while (count > 0) {
    console.log(count + "" + word + "of beer on the wall");
    console.log(count + "" + word + "of beer,");
    console.log("Take one down, pass it around");
    count = count - 1;
    if (count > 0) {
        console.log(count + "" + word + "of beer on the wall");
    } else {
        console.log("No more" + word + "of beer on the wall");
    }
}



< //means “less than”

> //</>means “greater than”

== //means “equal to”

=== //means “exactly equal to” 

<= //means “less than or equal to”

>= //means “greater than or equal to”

!= //means “not equal to”

|| //means OR. Results in true if either of the two expressions is true.

&& //means AND. Results in true if both of the two expressions are true.


function bark(name, weight) {  //function begins a function definition, bark is the funtion name, parameters of the function are in between (), {} is the body of the funtion//

}


var scores = [60, 50, 60, 58, 54, 58, 50, 52, 54];  //Ten values grouped together into an array and assigned to the variable scores//
//To acsess an item of the array we will use scores[]//
var solutions2 = scores[2];

3

//To link pages//
<script src="learning.html"></script>
