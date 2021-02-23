/*
 * Author: Junyao Li & Zihan Guo
 * Created: 2021/2/23
 * License: Public Domain
 */

// Create a function sortingHat()
function sortingHat(str) {
  // counts the letters in str and assigns it to a variable length
  len = str.length;
  // uses modulus (% operator) to get the remainder with 4: mod = length % 4;
  mod = len % 4;
  // create a conditional that will return Gryffindor, Ravenclaw, Slytherin,
  // and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3
  if (mod == 0) {
    return "Gryffindor. Gryffindors are known for their nerve, chivalry, daring, courage, bravery and determination.";
  } else if (mod == 1) {
    return "Ravenclaw. Ravenclaws are known for their wisdom, cleverness, and wit.";
  } else if (mod == 2) {
    return "Slytherin. Slytherins are known for being cunning and ambitious, although it is also known to have produced many Dark witches and wizards.";
  } else if (mod == 3) {
    return "Hufflepuff. Hufflepuffs are known for being trustworthy, loyal and hardworking.";
  }
  // var house = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
  // return house[mod];
}
// Create an event listener attached to #button
var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  // gets the value of #input and assigns it to a variable name
  var name = document.getElementById("input").value;
  // runs sortingHat(name) and stores the result in a variable house
  var house = sortingHat(name);
  newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  // appends a new styled paragraph to #output
  document.getElementById("output").innerHTML = newText;
})
