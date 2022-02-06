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

console.log('name2: ', name2);
console.log('gender2: ', gender2);
console.log('city2: ', city2);

// Example # 2
let user3 = ['apple', , 'almond', ['Olper', 'Limo Pani']];
let [fruit, vegetable = 'carrot', dryFruit, [milk, juice]] = user3;
console.log('fruit: ', fruit);
console.log('vegetable: ', vegetable);
console.log('dryFruit: ', dryFruit);
console.log('milk: ', milk);
console.log('juice', juice);

