/*
* Author: Junyao Li, Zihan Guo
* Created: 2021.2.4
* License: Public Domain
*/
function sortUserName() {
   var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
   // split string to array, sort the array, and put it back to string
   var nameArray = userName.split("");
   var nameArraySort = nameArray.sort();
   nameArraySort = nameArray.sort(function (a, b) {
     return a.localeCompare(b);
   })
   var nameSorted = nameArraySort.join("");
   return nameSorted;
}

// Output
document.writeln("Oh hey. I've fixed your name: ", sortUserName(), "</br>");
