/*
 * Author: Junyao Li & Zihan Guo
 * Created: 2021/2/16
 * License: Public Domain
 */
var userInput = document.getElementById("user-name");
var output = document.getElementById("output");
var button = document.getElementById("my-button");

function sortUserName() {
  // Gets the value of input field
  var userName = userInput.value;
  // split string to array, sort the array, and put it back to string
  var nameSorted = userName.split("").sort().join("");
  // Replaces the html in <div id=output> with the results
  // var newEl = document.createElement("p");
  // newEl.innerHTML = nameSorted;
  // output.appendChild(newEl);
  output.innerHTML = nameSorted;
}

// Attach an event listener to the button
button.addEventListener("click", sortUserName);
