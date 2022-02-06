// BEFOR ES6
let user = ['ahmed', 'male', 'karachi'];

let name = user[0];
let gender = user[1];
let city = user[2];

console.log('name: ', name);
console.log('gender: ', gender);
console.log('city: ', city);

// Using ES6

// Example # 1
let user2 = ['ahmed', 'male', 'karachi'];
let [name2, gender2, city2] = user2;

console.log('Example # 1');
console.log('name2: ', name2);
console.log('gender2: ', gender2);
console.log('city2: ', city2);

// Example # 2
let user3 = ['apple', , 'almond', ['Olper', 'Limo Pani']];
let [fruit, vegetable = 'carrot', dryFruit, [milk, juice]] = user3;
console.log('Example # 2');
console.log('fruit: ', fruit);
console.log('vegetable: ', vegetable);
console.log('dryFruit: ', dryFruit);
console.log('milk: ', milk);
console.log('juice', juice);

// Example # 3 (OBJECT)
let user4 = ['ahmed', 'male', 'Web and Mobile', 23];
let [myName, ...biodata] = user4;
console.log('Example # 3');
console.log('myName: ', myName);
console.log('biodata: ', biodata);

// Example # 4 (FUNCTION) 
// subExample -- i
function user5([name5, gender5, course]) {
    console.log('Example # 4 - i');
    console.log('name5: ', name5);
    console.log('gender5: ', gender5);
    console.log('course: ', course);
}
user5(['Ahmed Raza Attari', 'Male', 'Web and Mobile']);

// subExample -- ii
function user6() {
    return ['John Cena', 'Male', 'United States Champion'];
}
let [wName, wGender, champion] = user6();
console.log('Example # 4 - ii');
console.log('Name: ', wName);
console.log('Gender: ', wGender);
console.log('Title: ', champion);