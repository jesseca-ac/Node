// Module wrapper function
// (fuction (exports, require, module, __filename, __dirname) {
//
// })

// example
console.log(__dirname, __filename);

class Person {
  constructor(fullName, age) {
    this.fullName = fullName;
    this.age = age;
  }
  greeting() {
    console.log(`My name is ${this.fullName} and I am ${this.age}`)
  }
}

module.exports = Person;