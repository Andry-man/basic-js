module.exports = function transform(arr) {
    let next = '--discard-next';
    let prev = '--discard-prev';
    let doubnext = '--double-next';
    let doubprev = '--double-prev';
   if (Array.isArray(arr) == false) {
    throw new Error;
   }
   if (arr.length == 0) {
    return arr;
   }
   for (let i = 0; i < arr.length; i++) {
    if (arr[0] === doubprev || arr[0] === prev) arr.shift(); // delete first element in array
    if (arr[arr.length - 1] === doubnext || arr[arr.length - 1] === next ) arr.pop(); // delete last element in array
    if (arr[i] === doubnext) arr[i] = arr[i + 1]; // doubles next element
    if (arr[i] === doubprev) arr[i] = arr[i - 1]; // discard previous element
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === doubprev || arr[0] === prev) arr.shift(); // delete first element in array
    if (arr[arr.length - 1] === doubnext || arr[arr.length - 1] === next) arr.pop(); // delete last element in array
    if (arr[i] === next) arr.splice(i--, 2); //remove next element
    if (arr[i] === prev) arr.splice(--i, 2); // remove previous element
  }
  return arr;
};
