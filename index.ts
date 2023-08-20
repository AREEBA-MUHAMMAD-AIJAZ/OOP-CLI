class Person {
  private firstName: string;
  private lastName: string;
  private age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  greet(): string {
    return `Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`;
  }
}

const person1 = new Person('John', 'Doe', 30);
console.log(person1.greet());

class Student extends Person {
  private studentId: string;

  constructor(firstName: string, lastName: string, age: number, studentId: string) {
    super(firstName, lastName, age);
    this.studentId = studentId;
  }

  getStudentInfo(): string {
    return `${super.getFullName()} (Student ID: ${this.studentId})`;
  }
}

const student1 = new Student('Jane', 'Smith', 20, '12345');
console.log(student1.getStudentInfo());
