// //RECURSIVE FUNCTIONS
// const recursionFunction = (start: number, end: number) => {
//   if (start === end) return 0;
//   return start + recursionFunction(start + 1, end);
// };
// console.log(recursionFunction(0, 200));
// //FUNCTION THAT RETURN FUNCTIONS
// const add = (a: number) => {
//     return (b: number) => {
//       return a + b;
//     };
//   };
// const var1 = 1;
// const func1 = add(var1);
// const var2 = 2;
// console.log(func1(var2));
// //ANOTHER EXAMPLE OF FUNCTIONS THAT RETURN FUNCTIONS
// const multiply = (a:number) => (b:number) => {
//     console.log(`A: ${a} + B: ${b}`)
//     return a * b;
// }
// const multiplyWithRandomNumber = multiply(Math.random());
// console.log(multiplyWithRandomNumber(5));
// console.log(multiplyWithRandomNumber(5));
// console.log(multiplyWithRandomNumber(5));
// console.log(multiplyWithRandomNumber(5));
// console.log(multiplyWithRandomNumber(5));
//ARRAYS
var array = [1, 2, 3, 4, 5];
var sum = function (a, b) {
    return a + b;
};
var sumAllValuesLessThanCondition = array
    .filter(function (n) { return n < 4; })
    .reduce(sum);
console.log(sumAllValuesLessThanCondition);
var evenNumbers = array.some(function (n) { return n === 2; });
console.log(evenNumbers);
var slice = array.slice(0, 2);
console.log(slice);
array.map(function (n) { return console.log(n); });
