// // EXAMPLE # 1
// let name = 'Ahmed Raza Attari';
// let studentId = 'BB29133';
// let gender = 'male'
// let obj = {
//     name,
//     studentId,
//     gender,
// }
// console.log(obj);

// // EXAMPLE # 2
// let n = 'name';
// let c = 'course'
// let f = 'father'
// let obj = {
//     [n] : 'Ahmed Raza Attari',
//     [c] : 'BTech',
//     [f + n] : 'Abdul Razzaq',
//     extras: function()  {
//         return `${this.name} is a student of ${this.course} and his father name is ${this.fathername}`;
//     }
// };
// console.log(obj);
// console.log(obj.extras());

// // EXAMPLE # 3
// let a = 'apple', c = 'cucumber', o = 'orange', m = 'mango';
// let objFruits = {
//     [a] : 'Red Color',
//     [c] : 'Green Color',
//     [o] : 'Orange Color',
//     [m] : 'Green Color',
//     'fruits and vegetable'() {
//         return `apple is in ${this.apple}, cucumber is in ${this.cucumber}, orange is in ${this.orange} and mango is in ${this.mango}`;
//     }
// }
// console.log(objFruits);
// // console.log(objFruits.fandv());
// console.log(objFruits['fruits and vegetable']());    // // // NEW WAY

// EXAMPLE # 4
// let fname = 'Ahmed';
// let lname = 'Raza';
// let course = 'BTech';
// function student(fname, lname, course) {
//     let fullName = `${fname} ${lname}`;
//     return {fullName, course};
// }
// console.log(student(fname, lname, course));
// let a = student(fname, lname, course);
// console.log(a.fullName);
// console.log(a.course);


  

