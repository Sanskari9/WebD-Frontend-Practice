let arr = [2,4,6,7,3];
let b = arr.toString();

console.log(b, typeof b);

let c = arr.join('-');
console.log(c, typeof c)

console.log(arr.pop())
console.log(arr);
arr.push(9);
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(5);
console.log(arr);
