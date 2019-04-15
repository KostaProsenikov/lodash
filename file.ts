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

