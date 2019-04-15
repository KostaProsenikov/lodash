import * as _ from 'lodash';

// FIND MAX Object by PROP START

const objects = [
    {name: 'beer', price: 10 }, 
    {name: 'seeds', price: 25 }, 
    {name: 'event', price: 50 }, 
    {name: 'concert', price: 100 }, 
];

const result  = _.minBy(objects, 'price');
const result2  = _.maxBy(objects, 'price');

console.log('Min price object', result);
console.log('Max price object', result2);

// FIND MAX Object by PROP END


// Split array into equal parts START

const longArray = [1, 3 , 5, 6, 7, 10];

// Second param is take each two values and split them;
const splitArrayByTwo = _.chunk(longArray, 2);

// Split array by each three values
const splitArraysByThree = _.chunk(longArray, 3);

console.log('split array', splitArrayByTwo);
console.log('split array', splitArraysByThree);

// Split array into equal parts END

// Fill in array with values START

const arrWithNums = [2, 4, 6, 8];
// Arguments
// 1.Send the array as first arg
// 2. Value to be filled in
// 3. Start index to fill with value
// 4. End index to fill with value
const newArr = _.fill(arrWithNums, 5, 1, 3);

console.log('fill array values', newArr);

// Fill in array with values END


// Sorting array of objects by property START

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

// Sorting array of objects by property END
