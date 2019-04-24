import { lodashMethods } from './file';
const express = require('express');
const app     = express();
const port    = 3333;
const lodash = new lodashMethods();

const getMethod = (urlString: string, methodToCall: string, params?: any[], arrToSend?: any[]) => {
    app.get(`/api/${urlString}/`, (_req: any, res: any) => {
        let obj = {};
        if (arrToSend) {
            obj = { initialArr: arrToSend, arr: lodash[methodToCall](arrToSend, ...params)};
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

getMethod('sort', 'sortCollectionByProperty', [ ['year', 'name'], ['desc', 'asc']], movies);

getMethod('min', 'returnMinPrice', [true]);

getMethod('max', 'returnMinPrice', [false]);

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

getMethod('concatProds', 'concatArr', [concatProducts], productsArr);

// -----------------------------------------
// Concatenate 2 product collections end
// -----------------------------------------


// ---------------------------------
//          Server Start
// ---------------------------------

app.listen(port, () =>
    console.log(`Rest API started: http://localhost:${port}/api/`),
);

// ---------------------------------
//          Server Start
// ---------------------------------