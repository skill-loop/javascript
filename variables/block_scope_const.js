const x = 7;
console.log("Start scope: ", x);

{
    const x = 5;
    console.log("First scope: ", x);
}

{
    const x = 6;
    console.log("First scope: ", x);
}

console.log("Outer scope: ", x);