console.log('Arrays');

//Array object given by js is parent of all objects and can be used to create arrays

//let arr = [];
//or let arr = new Array();
//console.log(arr)

//let arr = new Array(4).fill(6); // simply fills the array from same value
//console.log(arr)

//let arr = Array.from({ length: 50 }, (x, i) => i * 3);  // to create iterative array using FROM
//console.log(arr)

// to get values with keys/iterator
// let arr = ['kim', 'jin', 'tony']
// console.log(Array.from(arr.entries()));
// console.log(new Map(arr.entries()));



// let arr = [
//     'kar',
//     {
//         name: 'doc'
//     },
//     () => 'nice',
//     true,
//     undefined
// ];
//console.log(arr.toString()); // convert each element into a string but unable to convert datatypes apart from primitive types. write them as object

// let arr = Array.from({ length: 5 }, (x, i) => i + 1);
// console.log(arr.toLocaleString('en-us', { style: 'currency', currency: 'USD' })); // use to convert string in a specific format

// let arr = ['kim', { name: 'jin' }, 'tony']
// console.log(arr.join('-')); // converts into string and also joins them together using a separator




// var x = 1;
// console.log(typeof /aaa/);


//reduce is an important part of arrays

const users = [
    { firstName: 'aks', lastName: 'sai', age: 26 },
    { firstName: 'don', lastName: 'tr', age: 75 },
    { firstName: 'eln', lastName: 'msk', age: 50 },
    { firstName: 'dep', lastName: 'pdk', age: 26 }
]

console.log(users);

const output = users.reduce((acc, curr) => {
    if (curr.age < 50) {
        acc.push(curr.firstName);
    }
    return acc;
}, []);

console.log(output);