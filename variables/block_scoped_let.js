"use strict";

let x = 5; // Here x is 5
{
    let y = 6;
}

y = 7; /* let is block scoped */
console.log(y);


// Here x is 5

{
let x = 2;
// Here x is 2
}

// Here x is 5