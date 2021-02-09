/*
* Author: Junyao Li, Zihan Guo
* Created: 2021.2.4
* License: Public Domain
*/

// takes user input
function sortUserName() {
   var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
   // split string to array, sort the array, and put it back to string
   var nameSorted = userName.split("").sort().join("");
   return nameSorted;
}

// Output
document.writeln("Oh hey. I've fixed your name: ", sortUserName(), "</br>");
