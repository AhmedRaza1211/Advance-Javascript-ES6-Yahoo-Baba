// // Example # 1
// // Making CLASS
// class greeting {
//     constructor() {
//         let name;
//         console.log('This is a Constructor Function');
//     }

//     whenYouCall() {
//         console.log('Salam ' + this.name + ' bhai kia hal he');
//     }
// }

// // Making OBJECT
// let a = new greeting;
// a.name = 'Ahmed Raza Attair';
// a.whenYouCall();

// // Example # 2
class second {

    // 1 # Constructor Function
    // run by default
    constructor(name, age) {
        this.name = name,
        this.age = age,
        console.log('This is constructor function and it will run automatically');
    }

    // 2 # Prototype 
    // run when we call
    whenCall() {
        console.log(`Salam ${this.name} bhai kia hal he ap ka. I am ${this.age} years old`);
    }

    // 3 # Static Method
    // call without object name, only call with (class name)
    static functionNameShouldBeAnything() {
        console.log('This is Statis Method');
    }

}

let one = new second('Ahmed Raza Attari', 23);
one.whenCall()
second.functionNameShouldBeAnything();

let two = new second('Abdul Hadi', 24);
two.whenCall();
second.functionNameShouldBeAnything();
