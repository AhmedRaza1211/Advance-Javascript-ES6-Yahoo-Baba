// // // EXAMPLE # 1
// fetch("16_content/readme.txt")
// // .then((response) => {
// //     return response.text();
// // })
// // .then((responseReceived) => {
// //     console.log(responseReceived);
// // })
// // // // SMALL WAY USING ARROW FUNCTION
// .then(response => response.text())
// .then(responseReceived => console.log(responseReceived));


// // // EXAMPLE # 2
// fetch('https://jsonplaceholder.typicode.com/users')
// .then( response => response.json())
// .then( responseReceived => {
//     console.log(responseReceived);
//     for (var data in responseReceived) {
//         let name = responseReceived[data].username;
//         let company = responseReceived[data].company.name;
//         document.write(`${name} lived in Address: 
//                         ${responseReceived[data].address.street} and 
//                         ${name} works at 
//                         ${company} <hr>`);
//     }
// })
// // .then( responseReceived => console.log(response1Received)) // // For showing error 
// .catch(error => console.log(`ERROR MESSAGE: ${error}`))


// // // EXAMPLE # 3
// fetch('16_json/student_data.json')
// .then(respone => respone.json())
// .then(data => {
//     console.log(data);
//     for (var i in data) {
//         document.write(`${data[i].name} - ${data[i].age} - ${data[i].country} - ${data[i].religion} <hr> `);
//     }
// })
// .catch(error => document.write(`Error Message: ${error}`));


// // // EXAMPLE # 4    --> Fetch Using Server
// // 1) POST
// let a = {
//     title: 'Ahmed',
//     body: 'Html Body',
//     userId: 12,
// }
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify(a),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// // 2) UPDATE
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//         name: 'Ahmed Raza Attari',
//         fnmam: 'Abdul Razzaq',
//         gender: 'male',
//         city: 'Karachi'
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));


// // EXAMPLE # 5
document.getElementById('saveForm').addEventListener('click', e => {
    e.preventDefault();
    let obj = {
        title: document.getElementById('titleText').value,
        body: document.getElementById('bodyText').value,
        userId: document.getElementById('userId').value
    };
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
});
