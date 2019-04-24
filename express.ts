const express = require('express');
const app     = express();
const port    = 3333;
import { lodashMethods } from './file';
const lodash = new lodashMethods();

app.get('/api/sort/', (_req, res) => {
    const obj = { arr: lodash.sortCollectionByProperty() };
    return res.json(obj);
});

app.get('/api/min/', (_req, res) => {
    const obj = { arr: lodash.returnMinPrice(true) };
    return res.json(obj);
});

app.get('/api/max/', (_req, res) => {
    const obj = { arr: lodash.returnMinPrice(false) };
    return res.json(obj);
});

app.get('/api/split/', (_req, res) => {
    const longArray = [1, 3 , 5, 6, 7, 10];
    const obj = {initialArr: longArray, arr: lodash.splitArray(longArray, 3)};
    return res.json(obj);
});

app.get('/api/fill/', (_req, res) => {
    const arrWithNums = [2, 4, 6, 8];
    const obj = {initialArr: arrWithNums, arr: lodash.fillArrayWithValues(arrWithNums, 5, 1, 4)};
    return res.json(obj);
});

app.listen(port, () =>
    console.log(`Rest API started: http://localhost:${port}/api/`),
);