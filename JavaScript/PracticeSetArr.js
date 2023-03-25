//Problem1
// let arr =[23,45,67,89,34];
// let a = prompt("Enter the number");
// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr);

//problem 2
let arr2 = [30,40,50,2,1,46,23,67,100];

let n = arr2.filter((x)=>{
    return x%10==0;
})
console.log(n);

//problem3

let arr3 = [1,2,3];
let fac = arr3.reduce((x1,x2)=>{
    return x1*x2;
})
console.log(fac);