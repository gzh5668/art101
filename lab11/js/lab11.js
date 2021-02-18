/*
 * Author: Junyao Li & Zihan Guo
 * Created: 2021/2/17
 * License: Public Domain
 */

// Find the section you want to add the button to
var challenge = $("#challenge");
var problems = $("#problems");
var results = $("#results");

// Create the button and give it a text label
var buttonC = "<button id = challenge-button>Click Me!</button>";
var buttonP = "<button id = problems-button>Or Me!</button>";
var buttonR = "<button id = results-button>Me!</button>";

// Add it to the section
challenge.append(buttonC);
problems.append(buttonP);
results.append(buttonR);

// Add a click event to each button
// Find the challenge, problems, or results section the button is in.
// Toggle a class special within the <div> of the section
$("#challenge button").click(function() {
  $("#challenge").toggleClass("special");
})

$("#problems button").click(function() {
  $("#problems").toggleClass("special");
})

$("#results button").click(function() {
  $("#results").toggleClass("special");
})
