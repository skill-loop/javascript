"use strict";

class Person {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
}

const father = new Person("Ankit", 21, "Male");
console.log(father);

Person.prototype.nation = function () {
    this.nationality = "Indian";
    console.log("Function called");
};

father.nation();
console.log(father);