///Getting Start Excercise //

//Question no 1//
//Personal Message: Store a person’s name in a variable, and print a message to that person.
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

var Person_Name:string = "Zubair";
var message:string = "Hello" +" " + Person_Name+" " +"Would you like to learn some typescript today?"
console.log(message);


//Question no 2//
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
var name1:string = "Zubair Ahmad";
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());
//console.log(name1.toLowerCase);
//console.log(name1.toUpperCase);
//console.log(na);


//Question no 3+4//
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
// Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var famous_name:string = "Prophet Muhammad S.A.W Said (Peace Be Upon Him)";
var famous_saying:string = "“Nothing is heavier on the Scale of Deeds than one’s good manners.”";
var quote:string = famous_name+","+famous_saying;
console.log(quote);

//Question no 5//
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. 
//Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

var name2:string = " Zubair Ahmad \t";
console.log(name2.trim());

//Question no 6//
// Write addition, subtraction, multiplication, and division operations that each result in the number 8. 
//Be sure to enclose your operations in print statements to see the results.

var num1:number = 16;
var num2:number = 11;
var num3:number = 5;
var num4:number = 4;
var num5:number = 3;
var num6:number = 2;

console.log("The result of the division of two numbers is ",num1/num6);
console.log("The result of the multiplication of two numbers is",num4*num6);
console.log("The result of the addition of two number is ",num3+num5);
console.log("The result of the two numbers subtratction is ",num2-num5);

//Question no 7//
//Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

var fav_num:number = 13;
console.log("My favourite number is ",fav_num);

//Question no 8//
//Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

var friends:string[] = ["Osman","Junaid","Asim","Majid"];
console.log("My friend name is",friends[0]);
console.log("My friend name is",friends[1]);
console.log("My friend name is",friends[2]);
console.log("My friend name is",friends[3]);

//Question no 9
//Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. //
//The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("Hello",friends[0],"How are you?");
console.log("Hello",friends[1],"How are you?");
console.log("Hello",friends[2],"How are you?");
console.log("Hello",friends[3],"How are you?");

        //OR//
for (let i = 0 ; i< friends.length; i++)   
{
    console.log("Hi",friends[i],"how are you?")
}     

//Question no 10//
// Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. 
//Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

var trans_mode:string[] = ["Train","Bus","Airplane","Car","Bike"];
console.log("My favrouite mode of transportation is ",trans_mode[0]);
console.log("I would prefer train to travel over",trans_mode[1]);
console.log("I would love to travel in Airplane for my Umrah InshaAllah ",trans_mode[2]);
console.log("V8 is my favroutie  ",trans_mode[3],"And i will own this car InshaAllah");
console.log("I would love to own Heavy",trans_mode[4]);

//Question 11
//If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.

var dinner_invitation:String [] = ["Majid","Asim","Osman"];

// console.log("Hey",dinner_invitation[0],"I would love to host you a dinner");
// console.log("Hey",dinner_invitation[1],"I would love to host you a dinner");
// console.log("Hey",dinner_invitation[2],"I would love to host you a dinner");

            //OR//
for(let i = 0; i< dinner_invitation.length; i++)      
{
    console.log("Hello",dinner_invitation[i],"I would love to host you a dinner")
}  

//Question 13
//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
dinner_invitation.splice(2,1);
console.log("Osman will not attend dinner today")

//Question 12
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.
dinner_invitation.push("Junaid")
//console.log("Hey",dinner_invitation[2],"I would love to host you a dinner");

//Question 14
//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
console.log("Hey",dinner_invitation[2],"I would love to host you a dinner");

//Question 15
//Print a second set of invitation messages, one for each person who is still in your list.
for (let i = 0; i< dinner_invitation.length ; i++)
{
    console.log("Hey", dinner_invitation[i] , "I would love to host you a dinner");
}


//Question 16
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

//  for ( let i = 0; i < dinner_invitation.length; i++)
// {
//     console.log("Hey guys",dinner_invitation[i], "We have found the bigger table so we can invite more gusets to dinner")
// }

dinner_invitation.forEach(((name,index)=>{
    console.log("Hey ",name , "We have found the bigger table so we can invite more gusets to dinner seat no ",index)

}))

dinner_invitation.splice(0,0,"Ahmad");
dinner_invitation.splice(3,0,"Ali");
dinner_invitation.push("Ali1");

dinner_invitation.forEach((newList) =>
{
    console.log("Hey",newList,"I would love to host you a dinner")
})


//Question 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
//print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

console.log("As your dinner table wont arrive on time so you can invite only two people");
console.log(dinner_invitation);
console.log("Hey ",dinner_invitation[5],"Sorry I cannot invite you on dinner")
dinner_invitation.splice(5,1);
console.log("Hey ",dinner_invitation[4],"Sorry I cannot invite you on dinner");
dinner_invitation.splice(4,1);
console.log(dinner_invitation);
console.log("Hey ",dinner_invitation[3],"Sorry I cannot invite you on dinner");
dinner_invitation.splice(3,1);
console.log("Hey ",dinner_invitation[2],"Sorry I cannot invite you on dinner");
dinner_invitation.splice(2,1);

console.log(dinner_invitation);

dinner_invitation.forEach(element => {
    console.log("hey",element,"You are still invited to dinner")
    
});

dinner_invitation.splice(1,1);
dinner_invitation.splice(0,1);

console.log(dinner_invitation);



//Question 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

var places:string[] = ["Makkah","Madinah","Switzerland","Dubai","NewZeland"];
console.log(places);

var sotred_array = places.sort();
console.log(sotred_array);

var reverse_order = places.reverse();
console.log(reverse_order);

console.log("Sorted Array is ",sotred_array);
console.log("Array in Reverse order is ",reverse_order);


//Question  19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

console.log("No of people invited to dinner",dinner_invitation.length);

//Question 20
//Think of something you could store in a array.
// For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

var list_of_places:string[] = [];
list_of_places.push("Karakoram Ranges");
list_of_places.push("Ravi River");
list_of_places.push("Sindh River");
list_of_places.push("Hawks Bay Sea");
list_of_places.push("Kumrat Valley");
console.log(list_of_places);

//Question 21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

var student:{} = 
{   
    name:"Zubair",
    age:20,
    class:"Software Engineering"

}
console.log("The object output is as follow",student);


//Question no 22;
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
//Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

var Error_Array:string [] = ['Car','Bike','Train']
console.log(Error_Array[4]);//This will produce error

//Question no 23
//Conditional Tests: Write a series of conditional tests. 
//Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru'console.log("Is car == 'subaru'? I predict True.")console.log(car == 'subaru')
// Look closely at your results, and make sure you understand why each line evaluates to True or False.
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car = 'subaru';
console.log("Is Car ==='subaru'?|predict true");
console.log(car ==  'subaru');
console.log("Is car  == 'toyota'?|predict false");
console.log(car == 'toyota');
console.log("Is Car !='Cultus'?|predict true");
console.log(car !='Cultus');
console.log("Is car !='subaru'? |Predict False");
console.log(car !='subaru');


//Question no 24
//More Tests
console.log("Is 4>3?|Predict True");
console.log(4>3);

console.log("apple == apple |predict true");
console.log("apple" =="apple");

console.log("apple == apple |predict false");
console.log("apple".toLowerCase == "apple".toUpperCase);

console.log("zubair == ahmad | predict false");
console.log("zubair".length == "ahmad".length);


console.log("zubair == zubair | predict true");
console.log("zubair".length == "zubair".length);



//Question no 25
//Alien Colors #1: Imagine an alien was just shot down in a game. 
//Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

var alien_color:string  = 'Green';
if (alien_color == 'Green')
{   
    console.log("You earned five points")
}

else
{
    console.log("You got 10 points")
}



var alien_color2 = 'red'
if (alien_color2 == 'Green')
{   
    console.log("You earned five points")
}

else
{
    console.log("You got zero points")
}


var alien_color3 = 'Yellow'
if (alien_color3 == 'Green')
{   
    console.log("You earned five points")
}

//Question no 26
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// Write one version of this program that runs the if block and another that runs the else block

var color_alien =  'Green';

if(color_alien = 'Green')
{
    console.log("Player just earned  5 points")
}
else
{
    console.log("Player just earned 10 points")
}

var color_alien1 =  'Red';
if (color_alien1 == 'Green')
{
    console.log("Player just earned five points")
}
else
{
    console.log("Player just earned 10 points")
}


//Question 27
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// If the alien is green, print a message that the player earned 5 points.
// If the alien is yellow, print a message that the player earned 10 points.
// If the alien is red, print a message that the player earned 15 points.
// Write three versions of this program, making sure each message is printed for the appropriate color alien.

var aliencolors = 'Red';

if(aliencolors == 'Green')
{
    console.log("Player just got 5 points")
}
else if(aliencolors == 'Red')
{
    console.log("Player just got 10 points")
}
else if(aliencolors =='Yellow')
{
    console.log("Player  just got 15 points")
}
else
{
    console.log("You got zero points")
}


//Qustion no 28
//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// If the person is less than 2 years old, print a message that the person is a baby.
// If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// If the person is age 65 or older, print a message that the person is an elder.

var person_age:number = 4;
if(person_age <2)
{
    console.log("person is baby")
}
else if(person_age>=2 && person_age <4)
{
    console.log("Person is toddler")
}
else if(person_age >=4 && person_age <13)
{
    console.log("Person is a kid")
}
else if(person_age>=13 && person_age<20)
{
    console.log("Person is teenager")
}
else if(person_age >=20 && person_age <65)
{
    console.log("Person is adult")
}
else
{
    console.log("Person is elder")
}


//Question 29
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
//if statements that check for certain fruits in your array.
// Make a array of your three favorite fruits and call it favorite_fruits.
// Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!

var favourite_fruits: string [] = ['Mangoe','Banana','Grapes'];
if(favourite_fruits.includes('Mangoe'))
{
        console.log("Mangoe is my favourtie fruit")
}
else if(favourite_fruits.includes('Banana'))
{
    console.log("Banana is  my favourite fruit")
}
else if(favourite_fruits.includes('Grapes'))
{
    console.log("Grapes is my favourite fruit")
}
else
{
    console.log("My Faourite fruit is not in the list")
}

//Question 30
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
//Imagine you are writing code that will print a greeting to each user after they log in to a website. 
//Loop through the array, and print a greeting to each user:
// If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

var users_list :string [] = ['admin','ahmad','zubair','AGE-30','GEU-40','ZCU-30'];
 
users_list.forEach(element => {
    console.log("Welcome to our site",element)
});

if(users_list.includes('admin'))
{
    console.log("Hey admin would you like to see status report?")
}
else
{
    console.log("Welcome to All users")
}

//Question no 31
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// If the list is empty, print the message We need to find some users!
// Remove all of the usernames from your array, and make sure the correct message is printed.


const empty_users :string [] = [];
if(empty_users.length ===0)
{
    console.log("List is empty we need to find the users")
}
empty_users.push('admin')

for( const user in empty_users)
{
    if(user === 'admin')
    {
        console.log("hey admin would you like to see status report?")
    }
 
}

//Question no 32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//Make a list of five or more usernames called current_users.
// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted

var current_users :String [] = ['AGE-30','HGMU-30','ZCU-30','ZCU-20','GEU-40'];
var new_users :String [] = ['HGMU-30','AGE-30','GEU-20'];

for(const newuser of new_users)
{
    const user_exist:boolean = current_users.some(
    (current_user) =>
    current_user.toLowerCase() === newuser.toLowerCase()
    );
    if(user_exist)
    {
        console.log(`Sorry ${newuser} exists`)
    }
    else
    {
        console.log(`${newuser} are available`)
    }
}

//Question 33
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// Store the numbers 1 through 9 in a array.
// Loop through the array.
// Use an if-else chain inside the loop to print the proper ordinal ending for each number.
 //Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.


 var ordinal_number :number [] = [1,2,3,4,5,6,7,8,9];
 for (const number of ordinal_number)
 {
        let ordinal:string = "";

        if(number ===1)
        {
            ordinal = "St"
        }
        else if(number ===2)
        {
            ordinal =  "nd"
        }
        else if(number ===3)
        {
            ordinal = "rd"
        }
        else
        {
            ordinal = "th"
        }
    console.log( ` ordinal orders of the numbers are ${number}${ordinal}`)
 }

 //Question 34
 //Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
 //and then use a for loop to print the name of each pizza.
//Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
//For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
//The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, 
//such as I really love pizza!

var pizza_list:string [] = ['Fajita Pizza','Tikka Pizza','Peporni']
pizza_list.forEach(element => {
    console.log(`i like ${element}`)
    
});
console.log("I really love Pizza")


//Question 35
//Animals: Think of at least three different animals that have a common characteristic. 
//Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// Modify your program to print a statement about each animal, such as A dog would make a great pet. 
// Add a line at the end of your program stating
// what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

var animal_list :String [] = ["Cat","Goat","Cow"];
animal_list.forEach(element => {
        console.log(`${animal_list}`)
});
animal_list.push("Dog");
animal_list.forEach((element,index) =>
    {
        console.log(element,"is domestic pet"//,index
        )
    })

 //Question 36
 //T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
 //The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
 function make_Shirt(size:string,message:string):any
 {
    //size = "Large";
    //message = "Please buy a shirt of";
    console.log(message,size,"Size")
 }
 make_Shirt("Large","Please buy a shirt of")


 //Question 37
 //Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
 //Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

 function make_default_large_shirt(size:string,message:String):any
 {
    console.log("Shirt size is",size,"And Message is",message)
 }
 make_default_large_shirt("Large","I love TypeScript");


 function make_shirt_medium(size:String,message:String):any
 {
    console.log("Shirt size is",size,"And message is ",message)
 }
 console.log("medium","I love TypeScript")

 //Question 38

 //Cities: Write a function called describe_city() that accepts the name of a city and its country. 
 //The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. 
 //Call your function for three different cities, at least one of which is not in the default country.


function describe_City(city:String,country:String):any
{
        console.log(city,"is capital of",country)
}
describe_City("Islamabad","Pakistan");
describe_City("Lahore is in","Punjab");
describe_City("Karachi is in","Sindh");

//Question 39
//City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:
//"Lahore, Pakistan"

function city_country(city:string,country:string):any
{
    console.log(`${city}${country}"`)
}
console.log('"Lahore"','"Pakistan"');

//Question 40
//Album: Write a function called make_album() that builds a Object describing a music album. 
//The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information
//Use the function to make three dictionaries representing different albums.
// Print each return value to show that Objects are storing the album information correctly. 
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//Make at least one new function call that includes the number of tracks on an album.


function make_album(artist_name:string,album_title:String,tracks?:number):any
{

    const album: Record<string, any> = {
        artist: artist_name,
        title: album_title,
        };
        if (tracks !== undefined) {
        album.tracks = tracks;
        }
        return album
 }
       // Creating album dictionaries
       console.log(make_album("Artist 1", "Album 1"));
       console.log(make_album("Artist 2", "Album 2", 12));
       console.log(make_album("Artist 3", "Album 3"));

//Question 41-43
//Magicians: Make a array of magician’s names. 
//Pass the array to a function called show_magicians(), which prints the name of each magician in the array.       
// Magicians
function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
    console.log(magician);
    }
   }
   // Creating an array of magician's names
   const magician_names: string[] = ["Magician 1", "Magician 2", "Magician 3"];
   // Calling show_magicians function
   show_magicians(magician_names);
   // Great Magicians
   function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
    for (const magician of magicians) {
    great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
   }
   // Calling make_great and show_magicians functions
   const great_magician_names: string[] = make_great(magician_names);
   show_magicians(great_magician_names);
   // Unchanged Magicians
   const magician_names_copy: string[] = magician_names.slice(); // Create a copy of the original array
   // Calling make_great with a copy of the array
   const great_magician_names_copy: string[] = make_great(magician_names_copy);
   // Verify that the original array is unchanged
   show_magicians(magician_names);
   show_magicians(great_magician_names_copy)



 //Question 44
 //Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
 //The function should have one parameter that collects as many items as the function call provides, 
 //and it should print a summary of the sandwich that is being ordered. 
 //Call the function three times, using a different number of arguments each time.


 // Sandwiches
function order_sandwich(...items: string[]): void {
    console.log("Sandwich order:");
    for (const item of items) {
    console.log(`- ${item}`);
    }
   }
   // Calling order_sandwich function
   order_sandwich("Ham", "Lettuce", "Tomato");
   order_sandwich("Turkey", "Swiss Cheese");
   order_sandwich("Peanut Butter", "Jelly", "Banana");



//Question45

// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs,
//  such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function car_info(manufacturer: string, model: string, ...features: string[]): Record<string, any> {
    const car: Record<string, any> = {
    manufacturer: manufacturer,
    model: model,
    };
    for (const feature of features) {
    const [key, value] = feature.split(":");
    car[key] = value;
    }
    return car;
   }
   // Calling car_info function
   const car1 = car_info("Toyota", "Camry", "Color: Red", "Year: 2023");
   const car2 = car_info("Honda", "Civic", "Color: Blue", "Year: 2022", "Sunroof: Yes");
   console.log(car1);
   console.log(car2);














