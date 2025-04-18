class Person {
    constructor(firstName, lastName, age, sex) {
        this.name = firstName + lastName;
        this.age = age;
        this.sex = sex;
    }
};

const father = new Person("Riy", "Mat", 54, "Male");
father.nationality = "Indian";

console.log(father);