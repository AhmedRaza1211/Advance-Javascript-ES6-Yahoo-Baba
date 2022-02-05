// Function with multiple arguments

let a = (name, ...arguReceiving) => {
    let total = 0;
    for (i of arguReceiving) {
        total += i;
    }
    console.log(`My name is ${name} and I earned $${total}`);
}

a('Ahmed Raza Attari', 20, 30, 40);
a('Roman Reigns' , 20, 30, 40, 50, 60);
a('Seth Rollins', 35, 23, 45, 32, 75, 88);


