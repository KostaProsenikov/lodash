import { lodashMethods } from './file';
const express = require('express');
const app     = express();
const port    = 3333;
const lodash = new lodashMethods();

const getMethod = (urlString: string, methodToCall: string, params?: any[], arrToSend?: any[]) => {
    app.get(`/api/${urlString}/`, (_req: any, res: any) => {
        let obj = {};
        if (arrToSend) {
            if (params.length && params[0] instanceof Array) {
                obj = { initialArr: arrToSend, secArray: [...params], result: lodash[methodToCall](arrToSend, ...params)};
            } else {
                obj = { initialArr: arrToSend, result: lodash[methodToCall](arrToSend, ...params)};
            }
        } else {
            obj = { arr: lodash[methodToCall](...params) };
        }
        return res.json(obj);
    });
}

const movies = [
    { name: 'Avengersssss',   year: 2015 },
    { name: 'Avengers: Infinity War',   year: 2016 },
    { name: 'Avengers: Endgame',   year: 2019 },
    { name: 'The Favourite',   year: 2019 },
    { name: 'Spider Man',   year: 2012 },
    { name: 'The Glasssessss',   year: 2019 },
    { name: 'Catch me if you can',   year: 2009 },
    { name: 'Arenatests',   year: 1990 },
    { name: 'Add new!!!',   year: 2015 },
];

const shoppingCart = [
    {name: 'mouse', price: 30 },
    {name: 'generic headset', price: 35 }, 
    {name: 'bose headphones', price: 150 }, 
    {name: 'jbl headphones', price: 70 }, 
];

getMethod('sort', 'sortCollectionByProperty', [ ['year', 'name'], ['desc', 'asc']], movies);

getMethod('min', 'returnMinPrice', [true, 'price'], shoppingCart);

getMethod('max', 'returnMinPrice', [false, 'price'], shoppingCart);

getMethod('split', 'splitArray', [2], [1, 3 , 5, 6, 7, 10]);

getMethod('fill', 'fillArrayWithValues',[5, 2, 4], [2, 4, 6, 8]);

getMethod('concat', 'concatArr', [[7, 9, 10]], [1, 3, 5]);

// -----------------------------------------
// Concatenate 2 product collections start
// -----------------------------------------

const productsArr = [
    {id: 1, name: 'iPhone', price: 1000 },
    {id: 2, name: 'OnePlus 6T', price: 600 },
    {id: 3, name: 'Pixel 3', price: 650 },
];

const concatProducts = [
    {id: 4, name: 'Samsung A80', price: 750 },
    {id: 5, name: 'Samsung S10+', price: 1000 },
];

getMethod('concat-products', 'concatArr', [concatProducts], productsArr);

// -----------------------------------------
// Concatenate 2 product collections end
// -----------------------------------------

getMethod('head', 'getFirstElement', [], productsArr);

getMethod('last', 'getLastElement', [], productsArr);

getMethod('stringify', 'arrJoin', [','], ['a', 'b', 'c']);

getMethod('remove-values', 'arrRemoveValues', [['b', 'c']], ['a', 'b', 'c', 'a', 'b', 'c']);

const objOfCars = [
    { brand: 'BMW', model: 'X5', topspeed: 250 },
    { brand: 'Tesla', model: 'S', topspeed: 350 },
    { brand: 'Bugatti', model: 'Chiron', topspeed: 400 },
    { brand: 'Ferrari', model: 'Enzo', topspeed: 399 },
];

getMethod('remove-from-collection', 'removeValuesFromArrByProp', 
        [ [{ 'brand': 'BMW' }, { 'brand': 'Bugatti' } ], 'brand'], objOfCars);

getMethod('intersect-by', 'intersectBy', [[2.3, 3.4], Math.floor], [1.1, 3.3]);


// -----------------------------------------
//    Get two objects intersection Start
// -----------------------------------------

const cars2 = [  
    { brand: 'BMW', model: 'X5', topspeed: 250 },
    { brand: 'Tesla', model: 'S', topspeed: 350 }
];
getMethod('intersect-with', 'intersectWith', [cars2], objOfCars);

// -----------------------------------------
//    Get two objects intersection End
// -----------------------------------------


getMethod('create-unique', 'createUniqueArr', [10, 'start_']);

const normalArray = [1, 2, 3];
getMethod('reverse', 'reverseArr', [], normalArray);


// ---------------------------------
//          Server Start
// ---------------------------------

app.listen(port, () =>
    console.log(`Rest API started: http://localhost:${port}/api/`),
);

// ---------------------------------
//          Server Start
// ---------------------------------