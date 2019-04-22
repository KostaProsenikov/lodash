
import * as _ from 'lodash';

// ------------------------------------------
// Find Min And Max Property START

const objects = [
    {name: 'mouse', price: 30 }, 
    {name: 'generic headset', price: 35 }, 
    {name: 'bose headphones', price: 150 }, 
    {name: 'jbl headphones', price: 70 }, 
];

const result  = _.minBy(objects, 'price');
const result2  = _.maxBy(objects, 'price');

console.log('Min price object', result);
console.log('Max price object', result2);

// ------------------------------------------
// Find Min And Max Property END
// ------------------------------------------

// ------------------------------------------
// Split array into equal parts START
// ------------------------------------------

const longArray = [1, 3 , 5, 6, 7, 10];

// Second param is take each two values and split them;
const splitArrayByTwo = _.chunk(longArray, 2);

// Split array by each three values
const splitArraysByThree = _.chunk(longArray, 3);

console.log('split array', splitArrayByTwo);
console.log('split array', splitArraysByThree);

// ------------------------------------------
// Split array into equal parts END
// ------------------------------------------

// ------------------------------------------
// Fill in array with values START
// ------------------------------------------

const arrWithNums = [2, 4, 6, 8];
// Arguments
// 1.Send the array as first arg
// 2. Value to be filled in
// 3. Start index to fill with value
// 4. End index to fill with value
const newArr = _.fill(arrWithNums, 5, 1, 3);

console.log('fill array values', newArr);

// ------------------------------------------
// Fill in array with values END
// ------------------------------------------

// ------------------------------------------
// Sorting array of objects by property START
// ------------------------------------------

const movies = [
    { name: 'Avengers',   year: 2015 },
    { name: 'Avengers: Infinity War',   year: 2016 },
    { name: 'Avengers: Endgame',   year: 2019 },
    { name: 'The Favourite',   year: 2019 },
    { name: 'Spider Man',   year: 2012 },
    { name: 'The Glass',   year: 2019 },
    { name: 'Catch me if you can',   year: 2009 },
  ];
   
  // Sort by `user` in ascending order and by `age` in descending order.
const sortedArr =  _.orderBy(movies, ['year', 'name'], ['asc', 'desc']);

console.log('sortedArr', sortedArr);

// ------------------------------------------
// Sorting array of objects by property END
// ------------------------------------------



// ------------------------------------------
//        Concatinate array START
// ------------------------------------------

const arrayOne = [1, 3, 5];
const concatArray = _.concat(arrayOne, 7, 9, [10]);
 
console.log('concated array', concatArray);
// => [ 1, 3, 5, 7, 9, 10 ]

const productsArr = [
  {id: 1, name: 'iPhone', price: 1000 },
  {id: 2, name: 'OnePlus 6T', price: 600 },
  {id: 3, name: 'Pixel 3', price: 650 },
]

const concatProducts = _.concat(productsArr, 
  {id: 4, name: 'Samsung A80', price: 750 },
  {id: 5, name: 'Samsung S10+', price: 1000 },
);

console.log('concated Products', concatProducts);

// ------------------------------------------
//        Concatinate array END
// ------------------------------------------


// ------------------------------------------
//     Get first element from array START
// ------------------------------------------

_.head([1, 2, 3]);
// => 1

// ------------------------------------------
//     Get first element from array END
// ------------------------------------------



// ------------------------------------------
//     Get last element from array START
// ------------------------------------------

_.last([1, 2, 3]);
// => 3

// ------------------------------------------
//     Get last element from array END
// ------------------------------------------



// ------------------------------------------
//     Get intersection from 2 arrays and
//     then do operation on it START
// ------------------------------------------

//  Compare the digits using the Math.floor func
// i.e Math.floor(2.1) => 2,  Math.floor(2.3) => 2
// so they are interception of the arrays

const intercept = _.intersectionBy([2.1, 3.3], [2.3, 3.4], Math.floor);
console.log('intercept', intercept);
// => [2.1]


// ------------------------------------------
//     Get intersection from 2 arrays and
//     then do operation on it END
// ------------------------------------------


// ------------------------------------------
//     Get intersection from 2 object arrays
//                    START
// ------------------------------------------

const arrObjects1 = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
const arrObjects2 = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
const interObject = _.intersectionWith(arrObjects1, arrObjects2, _.isEqual);
// Compare if any object is equal to another
// => [{ 'x': 1, 'y': 2 }]
console.log('object interception ', interObject);

// ------------------------------------------
//     Get intersection from 2 object arrays
//                    END
// ------------------------------------------

// --------------------------------------------
//     Join Array Elements with a string START
// --------------------------------------------

_.join(['a', 'b', 'c'], '~');
// => 'a~b~c'
console.log('stringify array ', _.join(['a', 'b', 'c'], ','));
// => 'a,b,c'

// --------------------------------------------
//     Join Array Elements with a string END
// --------------------------------------------


// --------------------------------------------
//    Remove values from array START
// --------------------------------------------


const array = ['a', 'b', 'c', 'a', 'b', 'c'];
_.pull(array, 'a', 'c');
// => ['b', 'b']

console.log('pull values from array ', array);

// --------------------------------------------
//    Remove values from array END
// --------------------------------------------

// ----------------------------------------------
// Remove object values from array by value START
// ----------------------------------------------


const arrayValues = [
   { x: 1, y: 1 },
   { x: 2 }, 
   { x: 3 }, 
   { x: 1 }
];
 

// Arguments
// array (Array): The array to modify.
// values (Array): The values to remove.
// [iteratee=_.identity] (Function): The iteratee invoked per element.

_.pullAllBy(arrayValues, [{ x: 1 }, { x: 3 }], 'x');
console.log(arrayValues);
// => [{ 'x': 2 }]

// --------------------------------------------
// Remove object values from array by value END
// --------------------------------------------



// --------------------------------------------
// Remove from array by some filter values Start
// --------------------------------------------

const arrayRemove = [1, 2, 3, 4];
const evens = _.remove(arrayRemove, (n) => {
  return n % 2 === 0;
});
 
console.log('odds array', arrayRemove);
// => [1, 3]
 
console.log('evens array', evens);
// => [2, 4]

// --------------------------------------------
// Remove from array by some filter values End
// --------------------------------------------



// --------------------------------------------
//    Create array with unique ids and label
//          for every item START
// --------------------------------------------

const uniqueArr = _.times(6, _.uniqueId.bind(null, 'name_'));
// => [ 'name_1', 'name_2', 'name_3', 'name_4', 'name_5', 'name_6' ]
console.log('unique array', uniqueArr);

// --------------------------------------------
//    Create array with unique ids and label
//          for every item END
// --------------------------------------------

// --------------------------------------------
//              Reverse an Array
//                 START
// --------------------------------------------
const normalArray = [1, 2, 3];
 
const reversed = _.reverse(normalArray);
// => [3, 2, 1]
console.log('reverse', reversed);


// --------------------------------------------
//              Reverse an Array
//                 END
// --------------------------------------------