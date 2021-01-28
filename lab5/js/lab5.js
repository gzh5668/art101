/*
* Author: Juyao Li, Zihan Guo
* Created: 2021/1/28
* License: Public Domain
*/
// Define Variables
make = "BMW";
model = "X5";
color = "Jet Black";
year = 1999;
ownIt = true;
yesOrNo = "Yes";

// Calculate
age = 2021 - year;

// Determine own it or not
if(ownIt) {
  yesOrNo = "Yes";
} else {
  yesOrNo = "No";
}

// Output
document.writeln("Make: " + make + "<br>");
document.writeln("Model: " + model + "<br>");
document.writeln("Color: " + color + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Age: " + age + " years<br>");
document.writeln("Owned: " + yesOrNo + "<br>");
