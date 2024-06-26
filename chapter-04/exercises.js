////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  let array = [];
  if(start - end === 0 || start - end === 1){
    return array;
  }
  if(step === undefined){
    if(start < end){
      while (start <= end) {
        array.push(start);
        start++;
      }
    }else{
      while(start >= end){
        array.push(start);
        start --;
       }
    }
  return array;
  }
  if(step > 0){
    if(start < end){
      while (start <= end) {
        array.push(start);
        start += step;
      }
    }else{
      while(start >= end){
        array.push(start);
        start -= step;
       }
    }
  }
    if(step < 0){// step is less than 0
      return array;
    }
      return array;
}
////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  let add = 0
  array.forEach((num) => add += num);
  return add;
}
console.log(sum(range(1, 10)));

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  let newArr = [];
 for(let i = array.length - 1; i >= 0; i--){
   newArr.push(array[i]);
 }
 return newArr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  let newArr = array.reverse();
  return newArr;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let rest = null;
  for(let i = array.length - 1; i >= 0; i--){
    rest = { value: array[i], rest: rest};
  }
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, array=[]) {
  //base
  if(list.rest === null){
    array.push(list.value)
    return array;
  }
  array.push(list.value)
  //recursion
  return listToArray(list.rest, array);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  //declaring rest as obj holding value first and the key of rest to value of list
  let rest = { value, rest: list};
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  //if list doesn't exist
if(!list){
  return undefined;
  //if n is 0
}else if(n === 0){
  // return value
  return list.value
}
return nth(list.rest, n-1)
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(obj1, obj2) {

if(typeof obj1 !== 'object' && typeof obj2 !== 'object' ){
  return obj1 === obj2;
}
//hard false if either  obj1 and obj2 are  an obj
if(typeof obj1 !== 'object' ||  typeof obj2 !== 'object'){
  return false;
}
//accessing keys on both objects
let obj1Keys = Object.keys(obj1);
let obj2Keys = Object.keys(obj2);

//hard false if the keys are not the same length
if(obj1Keys.length !== obj2Keys.length){
  return false;
}
//looping thru one of the arrays to determine if it's values equal the others
for(let i = 0; i < obj1Keys.length; i++){
  if(!obj2Keys.includes(obj1Keys[i]) || !deepEqual(obj1[obj1Keys[i]], obj2[obj1Keys[i]])){
    return false;
  }
}
return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};