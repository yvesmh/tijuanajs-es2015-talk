/*jshint esversion: 6*/

class Employee {
  constructor (name) {
    this.name = name;
  }

  sayHello() {
    console.log('Hola, mi nombre es: ', this.name);
  }
}

class Developer extends Employee {
  constructor(name, favoriteLanguage) {
    super(name);
    this.favoriteLanguage = favoriteLanguage;
  }

  static drinkCoffee() {
    console.log('Coffee is life');
  }
}

var myDev = new Developer('Foobar', 'JS');
myDev.sayHello();
Developer.makeSound();
myDev.makeSound();
Employee.sayHello();