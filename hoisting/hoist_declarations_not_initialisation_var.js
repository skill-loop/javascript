"use strict";

console.log(car); // cannot use it before initialisation
car = "BMW";
var car; // it goes to top
console.log(car);

/*  
    // converted code
    console.log(car); // undefined
    var car;
    car = "BMW";
    console.log(car); // BMW
*/