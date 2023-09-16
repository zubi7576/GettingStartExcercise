///Getting Start Excercise //
//Question no 1//
//Personal Message: Store a person’s name in a variable, and print a message to that person.
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var Person_Name = "Zubair";
var message = "Hello" + " " + Person_Name + " " + "Would you like to learn some typescript today?";
console.log(message);
//Question no 2//
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
var name1 = "Zubair Ahmad";
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());
//console.log(name1.toLowerCase);
//console.log(name1.toUpperCase);
//console.log(na);
//Question no 3+4//
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
// Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var famous_name = "Prophet Muhammad S.A.W Said (Peace Be Upon Him)";
var famous_saying = "“Nothing is heavier on the Scale of Deeds than one’s good manners.”";
var quote = famous_name + "," + famous_saying;
console.log(quote);
//Question no 5//
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. 
//Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var name2 = " Zubair Ahmad \t";
console.log(name2.trim());
//Question no 6//
// Write addition, subtraction, multiplication, and division operations that each result in the number 8. 
//Be sure to enclose your operations in print statements to see the results.
var num1 = 16;
var num2 = 11;
var num3 = 5;
var num4 = 4;
var num5 = 3;
var num6 = 2;
console.log("The result of the division of two numbers is ", num1 / num6);
console.log("The result of the multiplication of two numbers is", num4 * num6);
console.log("The result of the addition of two number is ", num3 + num5);
console.log("The result of the two numbers subtratction is ", num2 - num5);
//Question no 7//
//Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var fav_num = 13;
console.log("My favourite number is ", fav_num);
//Question no 8//
//Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var friends = ["Osman", "Junaid", "Asim", "Majid"];
console.log("My friend name is", friends[0]);
console.log("My friend name is", friends[1]);
console.log("My friend name is", friends[2]);
console.log("My friend name is", friends[3]);
//Question no 9
//Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. //
//The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("Hello", friends[0], "How are you?");
console.log("Hello", friends[1], "How are you?");
console.log("Hello", friends[2], "How are you?");
console.log("Hello", friends[3], "How are you?");
//OR//
for (var i = 0; i < friends.length; i++) {
    console.log("Hi", friends[i], "how are you?");
}
//Question no 10//
// Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. 
//Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var trans_mode = ["Train", "Bus", "Airplane", "Car", "Bike"];
console.log("My favrouite mode of transportation is ", trans_mode[0]);
console.log("I would prefer train to travel over", trans_mode[1]);
console.log("I would love to travel in Airplane for my Umrah InshaAllah ", trans_mode[2]);
console.log("V8 is my favroutie  ", trans_mode[3], "And i will own this car InshaAllah");
console.log("I would love to own Heavy", trans_mode[4]);
//Question 11
//If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.
var dinner_invitation = ["Majid", "Asim", "Osman"];
// console.log("Hey",dinner_invitation[0],"I would love to host you a dinner");
// console.log("Hey",dinner_invitation[1],"I would love to host you a dinner");
// console.log("Hey",dinner_invitation[2],"I would love to host you a dinner");
//OR//
for (var i = 0; i < dinner_invitation.length; i++) {
    console.log("Hello", dinner_invitation[i], "I would love to host you a dinner");
}
//Question 13
//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
dinner_invitation.splice(2, 1);
console.log("Osman will not attend dinner today");
//Question 12
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.
dinner_invitation.push("Junaid");
//console.log("Hey",dinner_invitation[2],"I would love to host you a dinner");
//Question 14
//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
console.log("Hey", dinner_invitation[2], "I would love to host you a dinner");
//Question 15
//Print a second set of invitation messages, one for each person who is still in your list.
for (var i = 0; i < dinner_invitation.length; i++) {
    console.log("Hey", dinner_invitation[i], "I would love to host you a dinner");
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
dinner_invitation.forEach((function (name, index) {
    console.log("Hey ", name, "We have found the bigger table so we can invite more gusets to dinner seat no ", index);
}));
dinner_invitation.splice(0, 0, "Ahmad");
dinner_invitation.splice(3, 0, "Ali");
dinner_invitation.push("Ali1");
dinner_invitation.forEach(function (newList) {
    console.log("Hey", newList, "I would love to host you a dinner");
});
//Question 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
//print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("As your dinner table wont arrive on time so you can invite only two people");
console.log(dinner_invitation);
console.log("Hey ", dinner_invitation[5], "Sorry I cannot invite you on dinner");
dinner_invitation.splice(5, 1);
console.log("Hey ", dinner_invitation[4], "Sorry I cannot invite you on dinner");
dinner_invitation.splice(4, 1);
console.log(dinner_invitation);
console.log("Hey ", dinner_invitation[3], "Sorry I cannot invite you on dinner");
dinner_invitation.splice(3, 1);
console.log("Hey ", dinner_invitation[2], "Sorry I cannot invite you on dinner");
dinner_invitation.splice(2, 1);
console.log(dinner_invitation);
dinner_invitation.forEach(function (element) {
    console.log("hey", element, "You are still invited to dinner");
});
dinner_invitation.splice(1, 1);
dinner_invitation.splice(0, 1);
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
var places = ["Makkah", "Madinah", "Switzerland", "Dubai", "NewZeland"];
console.log(places);
var sotred_array = places.sort();
console.log(sotred_array);
var reverse_order = places.reverse();
console.log(reverse_order);
console.log("Sorted Array is ", sotred_array);
console.log("Array in Reverse order is ", reverse_order);
//Question  19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log("No of people invited to dinner", dinner_invitation.length);
//Question 20
//Think of something you could store in a array.
// For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var list_of_places = [];
list_of_places.push("Karakoram Ranges");
list_of_places.push("Ravi River");
list_of_places.push("Sindh River");
list_of_places.push("Hawks Bay Sea");
list_of_places.push("Kumrat Valley");
console.log(list_of_places);
//Question 21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var student = {
    name: "Zubair",
    age: 20,
    class: "Software Engineering"
};
