const person = {
    name: "Ankit",
    age: 21,
    sex: "Male",
    family: {
        brother: 1,
        sister: 1,
    }
};

console.log(person);

console.log("\n-------------- LOOP -------------");
for(let x in person) {
    console.log(x, person[x]);
}
console.log("-------------- LOOP -------------\n");

console.log("-------------- ARRAY -------------");
const arr = Object.values(person);
console.log(arr);
console.log("-------------- ARRAY -------------\n");


console.log("-------------- ENTRIES -------------\n");
for(let [key, value] of Object.entries(person)) {
    console.log(key, value);
}
console.log("-------------- ENTRIES -------------\n");
