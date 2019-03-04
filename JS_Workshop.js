// Creating onjects
var obj={};
obj.prop1="Hello";
obj.prop2="World";
console.log(obj.prop1 + ' ' + obj.prop2);

var student = {Name:"Ben",  age:20};
console.log(student.Name + " " + student.age);

var obj= new Object();
obj.prop1="Hello";
obj.prop2="World";
console.log(obj.prop1 + ' ' + obj.prop2);

// Creating nested (inner) object
var student = { Name:"Ben",  age:20 , degree: {class:"B.Tech",section:"A"}};
console.log(student.degree.class);

// Array
var myArray=["Hello", "World"];
console.log(myArray[0]); // returns "Hello"

// Array methods - sorting
var numbers = [3,342,23,22,124];
numbers.sort(function(a,b){return b - a});
console.log(numbers[0]); // returns 342

// Function as argument
var f = function(){
    console.log("Hello");
}
var executor = function(fn){
    fn();
}
executor(f); // returns "Hello"

var a = 100; var b = "10"; var c = a + b;
console.log(c);

function stringGen()
{
    const inquirer = require('inquirer');
   //Type your code here.
    var rand = document.getElementById('num');
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    inquirer.prompt(num).then(input => {
        console.log(num);
    })

    for (var i = 0; i < 5; i++)
    rand += possible.charAt(Math.floor(Math.random() * possible.length));
    document.getElementById('result').innerHTML = rand;

    return rand; //Enter your return statement
  
}
