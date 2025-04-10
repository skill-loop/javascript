"use strict";

var x = 5;
{
    var y = 6;
}

y = 7; /* var is not block scoped */
console.log(y);