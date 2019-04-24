const express = require('express');
const app     = express();
const port    = 3333;
import { lodashMethods } from './file';
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

getMethod('sort', 'sortCollectionByProperty');

getMethod('min', 'returnMinPrice', [true]);

getMethod('max', 'returnMinPrice', [false]);

getMethod('split', 'splitArray', [2], [1, 3 , 5, 6, 7, 10]);

getMethod('fill', 'fillArrayWithValues',[5, 2, 4], [2, 4, 6, 8]);

app.listen(port, () =>
    console.log(`Rest API started: http://localhost:${port}/api/`),
);