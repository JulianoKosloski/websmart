// this script isn't meant to be embedded in the html, but it serves as a blank page to test what I learn


// here "document" refers to the html doc
document.getElementById("id") // will return the element from the DOM

// the same can be applied for a generic query of the DOM, by class and to get a vector/çlist of all elements of a specific class

document.getElementById("demo").style.fontSize = "35px"; 
// with .style.cssAttribute it's is possible to alter style on the fly

document.getElementById("demo").style.display = "none"; // same idea, but to hide or unhide elements

// javascript goes between <script> tags, and can be put into the body or head of the html
// (you have to mind page loading to understand when certain scripts will activate)

// scripts can be loaded from url, file paths or just by name, depending on your project organization

function myFunction(attribute) { //here I created a function that changes the content of one specific element
    document.getElementById("test").innerHTML = attribute; //write into html element
}

document.write() // to write html output 

window.alert() // to create an alert box

console.log() // write into the terminal

// use var myVariable = 3 to create a variable
// use let myBlockVariable = 3 to create a variable restricted to a namespace
// use const myConstant = 3.14 to create constants restricted to a namespace

// first declare variables, as such: let x, y, z and then use them to store values (though it can be done in the same line)

