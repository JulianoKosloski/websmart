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

/* 
This is a multiline
comment
oh yeah
*/

document.write() // to write html output 

window.alert() // to create an alert box

console.log() // write into the terminal

// use var myVariable = 3 to create a variable
// use let myBlockVariable = 3 to create a variable restricted to a namespace
// use const myConstant = 3.14 to create constants restricted to a namespace

// first declare variables, as such: let x, y, z and then use them to store values (though it can be done in the same line)

// You can create a const object: -----> works with arrays too (you change the content, but not reassign it entirely)
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson"; 

let myXP = 2**10;
console.log(myXP);

typeof myXP; //-> will return Number
myXP = "Treta"; //will now return String (I can change the value but I cannot reassign with 'let myXP = "Treta"')

const person = { //can create an object and put a function inside one of its attributes
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

//there's also an arrow function to simplify function writing, in the following pattern->   let myFunction = (a, b) => a * b;
hello = () => "Hello, world!"; //assigns "Hello, world" to a variable -> you can remove brackets if the func has only one statement

let mySum = (value1, value2) => { return value1 + value2};

class Animal {

constructor(name, size) {
    this.name = name;
    this.size = size;
}
}

let Bear = new Animal("Bear", "BigMode");
let Dog = new Animal("Dog", "Medium");

export {Bear, Dog};
// this allows me to import the named exports in another file as in: import {Bear, Dog} from "learning.js"

export default Animal; 
  //with this default export, it allows me to import this class in another js file as in import Animal from "learning.js"

// JSON is javascript object notation -> language independent way of sending and storing data (can be used in noSQL databases such as MongoDB and is also acessed by HTTP requests)

// JSON example

let myJSON = {
"Animals":[ //array of three objects
    {"name": "Bear", "size": "BigMode"},
    {"name": "Dog", "size": "Medium"},
    {"name": "Elephant", "size": "BigMode"}
]
}

myJSON.Animals[0]["name"] = "NewBigBear"; //I can acess JSON arrays like this if they are already parsed into JS

//or, if I have a JSON in another file
// JSON.parse(text) will turn a JSON string into an object that can be used in html
