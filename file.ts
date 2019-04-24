
import * as _ from 'lodash';
export class lodashMethods {

  constructor() {
  }
  
  // ------------------------------------------
  //        Find Min And Max Property START
  // ------------------------------------------

  returnMinPrice(minPrice: boolean) {
    const objects = [
      {name: 'mouse', price: 30 },
      {name: 'generic headset', price: 35 }, 
      {name: 'bose headphones', price: 150 }, 
      {name: 'jbl headphones', price: 70 }, 
    ];

    const result  = _.minBy(objects, 'price');
    const result2  = _.maxBy(objects, 'price');
    if (minPrice) {
      console.log('Min price object', result);
      return result
    }
    console.log('Max price object', result2);
    return result2;
  }

  // ------------------------------------------
  //      Find Min And Max Property END
  // ------------------------------------------

  // ------------------------------------------
  //    Split array into equal parts START
  // ------------------------------------------

  splitArray(initialArr, splitChunks) {
    // Second param is take each two values and split them;
    const splitArray = _.chunk(initialArr, splitChunks);

    // Split array by each three values
    console.log('split array', splitArray);
    // const splitArraysByThree = _.chunk(longArray, 3);
    // console.log('split array', splitArraysByThree);
    return splitArray;
  }
  
  // ------------------------------------------
  //      Split array into equal parts END
  // ------------------------------------------

  // ------------------------------------------
  //      Fill in array with values START
  // ------------------------------------------

  fillArrayWithValues(initialArr, valueToFill, startInd, endInd) {
    // Arguments
    // 1.Send the array as first arg
    // 2. Value to be filled in
    // 3. Start index to fill with value
    // 4. End index to fill with value
    const newArr = _.fill(initialArr, valueToFill, startInd, endInd);
    console.log('fill array values', newArr);
    return newArr;
  }

  // ------------------------------------------
  //      Fill in array with values END
  // ------------------------------------------

  // ------------------------------------------
  // Sorting array of objects by property START
  // ------------------------------------------

  sortCollectionByProperty(initialArr: any[], sortParams: any[], sortOptions: any[]) {
    const sortedArr =  _.orderBy(initialArr, [...sortParams], [...sortOptions]);
    // console.log('sortedArr', sortedArr);
    return sortedArr;
  }
 
  // ------------------------------------------
  // Sorting array of objects by property END
  // ------------------------------------------


  // ------------------------------------------
  //        Concatinate array START
  // ------------------------------------------

  concatArr(initialArr: any[], secondArr: any[]) {
    let concatArray = [];
    if (initialArr.length && secondArr.length) {
      concatArray = _.concat(initialArr, secondArr)
      console.log('concated array', concatArray);
    }
    return concatArray;
  }

  // ------------------------------------------
  //        Concatinate array END
  // ------------------------------------------


  // ------------------------------------------
  //     Get first element from array START
  // ------------------------------------------

  getFirstElement() {
    const arr = [1, 2, 3];
    const firstEl = _.head(arr);
    console.log('Head', firstEl);
    // => 1
    return firstEl;
  }

  // ------------------------------------------
  //     Get first element from array END
  // ------------------------------------------


  // ------------------------------------------
  //     Get last element from array START
  // ------------------------------------------

  getLastElement() {
    const arr = [1, 2, 3];
    const lastEl = _.last(arr);
    console.log('Last', lastEl);
    // => 1
    return lastEl;
  }

  // ------------------------------------------
  //     Get last element from array END
  // ------------------------------------------


  // ------------------------------------------
  //     Get intersection from 2 arrays and
  //     then do operation on it START
  // ------------------------------------------

  // Compare the digits using the Math.floor func
  // i.e Math.floor(2.1) => 2,  Math.floor(2.3) => 2
  // so they are interception of the arrays

  interSectBy() {
    const intercept = _.intersectionBy([2.1, 3.3], [2.3, 3.4], Math.floor);
    console.log('intercept', intercept);
    // => [2.1]  
    return intercept;
  }

  // ------------------------------------------
  //     Get intersection from 2 arrays and
  //     then do operation on it END
  // ------------------------------------------


  // ------------------------------------------
  //     Get intersection from 2 object arrays
  //                    START
  // ------------------------------------------

  interSectWith() {
    const arrObjects1 = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    const arrObjects2 = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
    
    const interObject = _.intersectionWith(arrObjects1, arrObjects2, _.isEqual);
    // Compare if any object is equal to another
    // => [{ 'x': 1, 'y': 2 }]
    console.log('object interception ', interObject);
    return interObject;
  }

  // ------------------------------------------
  //     Get intersection from 2 object arrays
  //                    END
  // ------------------------------------------

  // --------------------------------------------
  //     Join Array Elements with a string START
  // --------------------------------------------

  arrJoin() {
    const stringifiedArr =  _.join(['a', 'b', 'c'], ',');
    console.log('stringify array ', stringifiedArr);
    // => 'a,b,c'
    return stringifiedArr;
  }

  // --------------------------------------------
  //     Join Array Elements with a string END
  // --------------------------------------------


  // --------------------------------------------
  //    Remove values from array START
  // --------------------------------------------

  arrRemoveValues() {
    const array = ['a', 'b', 'c', 'a', 'b', 'c'];
    _.pull(array, 'a', 'c');
    // => ['b', 'b']
  
    console.log('pull values from array ', array);
    return array;
  }

  // --------------------------------------------
  //    Remove values from array END
  // --------------------------------------------

  // ----------------------------------------------
  // Remove object values from array by value START
  // ----------------------------------------------

  removeValuesFromArrByProp() {
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
    return arrayValues;
  }

  // --------------------------------------------
  // Remove object values from array by value END
  // --------------------------------------------


  // --------------------------------------------
  // Remove from array by some filter values Start
  // --------------------------------------------

  arrFilterValuesByFunction() {
    const arrayRemove = [1, 2, 3, 4];
    const evens = _.remove(arrayRemove, (n) => {
      return n % 2 === 0;
    });
    
    console.log('odds array', arrayRemove);
    // => [1, 3]
    
    console.log('evens array', evens);
    // => [2, 4]
    return arrayRemove;
  }

  // --------------------------------------------
  // Remove from array by some filter values End
  // --------------------------------------------


  // --------------------------------------------
  //    Create array with unique ids and label
  //          for every item START
  // --------------------------------------------

  createUniqueArr() {
    const uniqueArr = _.times(6, _.uniqueId.bind(null, 'name_'));
    // => [ 'name_1', 'name_2', 'name_3', 'name_4', 'name_5', 'name_6' ]
    console.log('unique array', uniqueArr);
    return uniqueArr;
  }

  // --------------------------------------------
  //    Create array with unique ids and label
  //          for every item END
  // --------------------------------------------

  // --------------------------------------------
  //              Reverse an Array
  //                 START
  // --------------------------------------------

  reverseArr() {
    const normalArray = [1, 2, 3];
  
    const reversed = _.reverse(normalArray);
    // => [3, 2, 1]
    console.log('reverse', reversed);
    return reversed;
  }

  // --------------------------------------------
  //              Reverse an Array
  //                 END
  // --------------------------------------------

}
