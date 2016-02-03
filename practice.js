//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

  //Code here
var me = {
	name:"JitinG",
	age: 33
}



//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  //Code here
function FavoriteThings (theBand, theFood, thePerson, theBook, theMovie, theHoliday) {
	this.band = theBand;
	this.food = theFood;
	this.person = thePerson;
	this.book = theBook;
	this.movie = theMovie;
	this.holiday = theHoliday;
} 

var favoriteThings = new FavoriteThings("MyBand","MyFood","MyPerson","MyBook","The Reader", "Yellow Stone");


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  //Code here
favoriteThings.car = "Ferari";
favoriteThings.brand="ABC";

FavoriteThings.prototype.car;

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

  //Code here
favoriteThings.food = "Lettuce";
favoriteThings.book = "50 Shades of Gray";



//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

  //Code here

var backPack = {};
var item = "firstPocket";
backPack[item] = "chapstick";

alert(backPack);

//After you do the above, alert your entire backPack object.

  //Code here

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

  //Code here

for (var prop in backPack) {
	console.log(backPack[prop]);
}


//NEXT PROBLEM




//Create an 'alsoMe' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

  //Code Here


var Me = function(theName, theAge, theHeight, theGender, theMarried, theEyeColor, theHairColor) {
	this.name =  theName;
	this.age =  theAge;
	this.height = theHeight;
	this.gender = theGender;
	this.married = theMarried;
	this.eyeColor = theEyeColor;
	this.hairColor = theHairColor;
}

var alsoMe = new Me("Tyler","24","6'0","Male","Married","Blue","Black");

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

//Code Here



//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

  //Code Here
var Album = function(theKey1, theKey2, theKey3, theKey4, theKey5) {
	this.key1 = theKey1;
	this.key2 = theKey2;
	this.key3 = theKey3;
	this.key4 = theKey4;
	this.key5 = theKey5;
}

var album = new Album("Key1", "Key2", "Key3", "Key4", "Key5");


//Now, loop through your album object alerting every song title individually.

  //Code Here




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

  //Code Here

var State = function(theName, thePopulation) {
	this.name = theName;
	this.population = thePopulation;
}

var state1 = new State("Utah", 1200000);
var state2 = new State("Nevada", 1100000);
var state3 = new State("Arizona", 1000000);
var state4 = new State("Alasca", 1500000);
var state5 = new State("California", 2000000);

var states = [];
states.push(state1, state2, state3, state4, state5);

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

  //Code Here




//NEXT PROBLEM




var user1 = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

  //Code Here

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  //Code Here




//NEXT PROBLEM




var user2 = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

  //Code Here

//Now call the sayName method that's on the user object which will alert the users email

  //Code Here




//NEXT PROBLEM




//Create an empty object called methodCollection.

  //Code Here

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

  //Code Here

//Now call your alertHello and logHello methods.

  //Code Here



//NEXT PROBLEM



// Create a function called MakePerson which takes in name, birthday, ssn as its parameters and returns a new object with all of the information that you passed in.

  //Code Here



//NEXT PROBLEM



// Create a function called MakeCard which takes in all the data it needs to make a Credit Card object and returns that object so that whenever you invoke MakeCard, you get a brand new credit card.

  //Code Here
  
  
  
//NEXT PROBLEM



/* As of this point you should have a MakePerson and a MakeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard.
*/

  //Code Here
