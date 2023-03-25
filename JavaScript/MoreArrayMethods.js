let num = [12,45,67,75,78,893,223,111,434,567];
let b = [89,45,23,55,89];
// delete a[0];
// console.log(a, a.length);
// let newArr = a.concat(b);
// console.log(newArr, newArr.length);
// const compare = (a,b) =>{
//     return a-b;
// }
// num.sort(compare);
// num.reverse();
// console.log(num);

//splice and slice
num.splice(2,3,1,2,3,4,5);
console.log(num);

let newNum = num.slice(0,3);
console.log(newNum);