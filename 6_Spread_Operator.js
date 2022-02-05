// let spreadOper = (text, ...receive) => {
//     console.log(text);
//     let total = 0;
//     for (i of receive) {
//         total += i;
//     }
//     console.log(total);
// }

// let arr = [1, 3, 5, 7, 9, 11, 13, 15];
// spreadOper('Ahmed Raza Attari', ...arr)

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1.push(4, 5);
console.log('arr1: ' + arr1);
console.log('arr2: ' + arr2);

let arr3 = [1, 2, 3];
let arr4 = [...arr3];
arr3.push(4, 5);
console.log('arr3: ' + arr3);
console.log('arr4: ' + arr4);

// ARRAY CONCAT
let one = [1, 2, 3, 4, 5];
let two = [6, 7, 8, 9, 10];
let three = [3, ...one, ...two];
console.log(three);

// OBJECT CONCAT
let obj1 = {
    name: 'Ahmed Raza Attari',
    fname: 'Abdul Razzaq'
}

let obj2 = {
    course: 'Web and Mobile'
}

let obj3 = {...obj1, ...obj2};
console.log(obj3);