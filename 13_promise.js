// // EXAMPLE # 1
// let complete = true;
// let prom = new Promise(function(resolve, reject) {
//     if (complete) {
//         resolve('I am successful');
//     } else {
//         reject('I am failed');
//     }
// })

// console.log(prom);

// // EXAMPLE # 2
// function prom(complete) {
//     return new Promise(function(resolve,reject) {
//         if(complete) {
//             resolve('I am successful');
//         } else {
//             reject('I am reject');
//         }
//     })
// }

// console.log(prom(true));

// // EXAMPLE # 3
// function prom(complete) {
//     return new Promise(function(resolve,reject) {
//         console.log('Fetching Data! Please wait');
//         setTimeout( () => {
//             if (complete) {
//                 resolve('I am successful');
//             } else {
//                 reject('I am reject');
//             }
//         }, 3000);
//     })
// }

// function onFulfilment(result) {
//     console.log(result);
// }

// function onRejection(error) {
//     console.log(error);
// }

// prom(true).then(onFulfilment).catch(onRejection);

// // EXAMPLE # 4
// function prom(complete) {
//     return new Promise(function (resolve, reject) {
//         console.log('Fetching Data! Please wait');
//         setTimeout(() => {
//             if (complete) {
//                 resolve('I am successful');
//             } else {
//                 reject('I am reject')
//             }
//         }, 3000);
//     })
// }

// prom(false)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })




// ****************************************************************************************
//                  THAPA TECHNICAL (MASTER THE PROMISE IN JAVASCRIPT)
// ****************************************************************************************

// EXAMPLE # 1
const promiseObj1 = new Promise((resolve, reject) => {
    console.log('Fetching Data! Please wait');
    setTimeout(() => {
        let rollNo = [1, 2, 3, 4, 5, 6];
        resolve(rollNo);
        // reject('Error while receiving data');
    }, 3000);
});

const getBioData = (receiveRollNo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let bioData = {
                name: 'Ahmed',
                age: 23,
                course: 'Web and Mobile'
            }
            resolve(`My roll no. is ${receiveRollNo}, I am ${bioData.name} and I am ${bioData.age} years old.`)
        }, 2000);
    });
}

promiseObj1
    .then((getRollNo) => {
        console.log(getRollNo);
        // getBioData(getRollNo[1]).then((bio) => {
        //     console.log(bio);
        // }) 
        // // OR
        return getBioData(getRollNo[2]).then( (bio) => console.log(bio));
    })
    .catch((error) => {
        console.log(error);
    });
