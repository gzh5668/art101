/*
 * Author: Junyao Li & Zihan Guo
 * Created: 2021/2/10
 * License: Public Domain
 */

// Use getElementById() to find the output <div> and assign it to variable outputEl
var outputEl = document.getElementById("output");

// Create a new element with document.createElement("p") and assign it to a variable new1El
var new1El = document.createElement("p");
// Change the html attribute of new1El to say something new.
new1El.innerHTML = "new1El: Is this what I'm supposed to do?";
// Change the html attribute of new1El to say something new.
new1El.innerHTML = "new1El: Maybe this is what I'm supposed to do."

// Create another new element and assign it to a variable new2El
var new2El = document.createElement("p");
// Change the html attribute of new2El to say something else.
new2El.innerHTML = "new2El: This should be what I'm supposed to do."

// Append both new elements one at a time using appendChild() to your output <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Change the css attributes of at least two elements of your page
new1El.style.color = 'blue';
new2El.style.color = 'yellow';

// Bonus: Can you add a new element to the top of an element?
var new3El = document.createElement("p");
new3El.innerHTML = "Bonus!";
outputEl.insertBefore(new3El, new1El);
