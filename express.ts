const express = require('express');
const app     = express();
const port    = 3333;
import { lodashMethods } from './file';

app.get('/', (_req: any, res: any) => {
    const lodash = new lodashMethods();
    const arr = lodash.sortCollectionByProperty();
    const obj = { result: arr }
    return res.json(obj);
});

app.listen(port, () =>
    console.log(`Rest API started: http://localhost:${port}/`),
);