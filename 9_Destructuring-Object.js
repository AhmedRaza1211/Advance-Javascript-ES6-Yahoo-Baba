// Example # 1
let objs = {
    name: 'Ahmed Raza Attari',
    gender: 'Male',
    hobby: 'Tech Videos'
}
let {name, gender, hobby} = objs; // // Here variable name should be exact same which we use under the object  
console.log('Example # 1');
console.log(name);
console.log(gender);
console.log(hobby);

// Example # 2 
let objss = {
    fruit: 'Mango',
    vegetable: 'Pumpkin',
    dryFruits: 'Almond'
}
let {fruit, dryFruits} = objss;  // // Here those name matches, their value will assign and those variable name not matches we don't get it value
console.log('Example # 2');
console.log(fruit);
// console.log(vegetable);      // // It gives Reference Error: 
console.log(dryFruits);

// Example # 3
let objsss = {
    color1: 'Red',
    color2: 'Blue',
    color3: 'Green'
}
let {color1: c1, color2: c2, color3: c3} = objsss;
console.log('Example # 3');
console.log(c1);
console.log(c2);
console.log(c3);