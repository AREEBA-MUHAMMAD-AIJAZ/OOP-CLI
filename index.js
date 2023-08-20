"use strict";
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    greet() {
        return `Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`;
    }
}
const person1 = new Person('John', 'Doe', 30);
console.log(person1.greet());
class Student extends Person {
    constructor(firstName, lastName, age, studentId) {
        super(firstName, lastName, age);
        this.studentId = studentId;
    }
    getStudentInfo() {
        return `${super.getFullName()} (Student ID: ${this.studentId})`;
    }
}
const student1 = new Student('Jane', 'Smith', 20, '12345');
console.log(student1.getStudentInfo());
