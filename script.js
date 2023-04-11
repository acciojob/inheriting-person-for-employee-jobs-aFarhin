// Person constructor function
function Person(name, age) {
  this.name = "Alice";
  this.age = 25;
}

// greet method added to the Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Employee constructor function that inherits from Person
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }
}

 // Inheritance: Set the Employee's prototype property to a new object with the Person's properties
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// jobGreet method added to the Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
}


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
