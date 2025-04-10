let x = 5;
console.log("Start scope ", x);

{
    let x = 6;
    console.log("First scope ", x);
}

{
    let x = 7;
    console.log("Second scope ", x);
}

console.log("Outer most scope ", x);