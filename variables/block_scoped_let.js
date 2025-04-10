"use strict";

let x = 5;
{
    let y = 6;
}

y = 7; /* let is block scoped */
console.log(y);