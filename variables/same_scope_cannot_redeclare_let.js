"use strict";

{
    let x = 5;
    console.log("First scope ", x);
}
{
    let x = 6;
    console.log("Second scope ", x);
}
let x = 7;
console.log("Outer scope ", x);