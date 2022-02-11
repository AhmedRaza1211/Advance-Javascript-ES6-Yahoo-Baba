// // Example # 1
// class employee {
//     constructor(name) {
//         this.name = name;
//         console.log('Constructor Function: Employee__ : ' + this.name);
//     }

// }

// class manager extends employee {
//     constructor(name) {
//         super(name);
//         this.name = name;
//         console.log('Constructor Function: Manajor__ : ' + this.name);
//     }

// }

// let a = new manager('Ahmed Raza Attari');


// // Example # 2
// class people {
//     constructor(name) {
//         this.name = name;
//         console.log('Constructor Function: This is People Constructor');
//     }

//     nameName() {
//         console.log('People name is : ' + this.name);
//     }
// }

// class teacher extends people {
//     // Now below (nameName) function will run 
//     nameName() {
//         console.log('Teacher name is : ' + this.name);
//     }
// }

// // let mainClass = new people('Ahmed Raza Attari');
// // mainClass.nameName();

// let a = new teacher('Ahmed Raza Attari');
// a.nameName();


// // Example # 3
// class peoplee {
//     constructor(name) {
//         this.name = name
//         console.log('Constructor Function: This is Peoplee Constructor');
//     }

//     nameName() {
//         console.log('People name is: ' + this.name);
//     }
// }

// class teacherr extends peoplee {
//     nameName() {
//         // Now both (nameName) will run
//         super.nameName();
//         console.log('Teacher name is: ' + this.name);
//     }
// }

// let aa = new teacherr('John Cena');
// aa.nameName();


// Example # 4
class familyMember {
    constructor(name, age, number) {
        this.name = name;
        this.age = age;
        this.number = number;
        console.log('Constructor: Family Members');
    }

    details() {
        document.write(`<h2> Niece Details </h2>
                        Name: ${this.name} <br/>
                        Age: ${this.age} <br/>
                        Number: ${this.number} <br/>`);
    }


}

class childs extends familyMember {
    // constructor() {
    //     super()
    // }
    details() {
        let fastFood = 'Pizza';
        let drink = 'Day Fresh';
        let extras = fastFood + drink;

        document.write(<h2> Niece Rewards </h2>)
    }
}

let s1 = new childs('Zainab', '2 years', 'Elder')
s1.details();
