 
// Object that represents library containing all the functionality. Starts here:
const _ = {

    //Method which immitates .clamp() (https://lodash.com/docs/4.17.11#clamp)
    clamp(number, lower, upper){
      const lowerClampedValue = Math.max(number, lower);
      const clampedValue = Math.min(lowerClampedValue, upper); 
        return clampedValue
    },
      
    //Method which immitates .inRange() (https://lodash.com/docs/4.17.11#inRange)  
    inRange(number, start, end){
      if(end === undefined) {
        end = start;
        start = 0;
        };
    
      if(start > end) {
        const numTemp = end;
        end = start;
        start = numTemp;
        };

      let outcomeOk = ((end >= number && start <= number))
        return outcomeOk
    },
      
    //Method which immitates .words()(https://lodash.com/docs/4.17.11#words)
    words(string){
      const wrds = string.split(' ');
        return wrds
    },
      
    //Method which immitates .pad() (https://lodash.com/docs/4.17.11#pad)
    pad(string, length){
      if(string.length >= length){
        return string
      }
      else {
        const amountOfBlanks = length - string.length;
        const BlanksBeforeString = Math.floor(amountOfBlanks/2);
        const BlanksAfterString = amountOfBlanks - BlanksBeforeString;
        const finalString = ' '.repeat(BlanksBeforeString) + string + ' '.repeat(BlanksAfterString);
          return finalString 
      };
    },  
    
    //Method which immitates .has() (https://lodash.com/docs/4.17.11#has)
    has(object, key){
      const keyInObject = key in object;
        return keyInObject
    },
    
    //Method which immitates .invert() (https://lodash.com/docs/4.17.11#invert)
    invert (object) {
      let reversedObject = {};
        for ( abc in object) {
          reversedObject[object[abc]] = abc;
        };
          return reversedObject
    },
    
    //Method which immitates .findKey() (https://lodash.com/docs/4.17.11#findKey)
    findKey (object, predicate) {
      for (let xyz in object) {
        let value = object[xyz];
        let predicateReturnValue = predicate(value);
          if (predicateReturnValue){
            return xyz
          };
      };
        return undefined
    },
      
    //Method which immitates .drop() (https://lodash.com/docs/4.17.11#drop)
    drop (array, n) {
      if(!n){
        n = 1;
      };
        let droppedArray = array.slice(n);
          return droppedArray
    },
      
    // Method which imitates .dropWhile() (https://lodash.com/docs/4.17.11#dropWhile)
    dropWhile (array, predicate) {
      let dropNumber = array.findIndex((element, index) => {
        return !(predicate(element,index,array)); 
      });
      let droppedArr = this.drop(array,dropNumber);
        return droppedArr
    },
      
    // Method which imitates .chunk() (https://lodash.com/docs/4.17.11#chunk)
    chunk (array, size) {
      if (size === undefined){
        size = 1;
      };
      const chuckedArray = [];
        for(let i = 0; i < array.length; i +=size){
          let arrayChuck = array.slice(i, i + size);
          chuckedArray.push(arrayChuck);
        };
          return chuckedArray
    }
};  
    
    // Do not write or modify code below this line.
    module.exports = _;
    