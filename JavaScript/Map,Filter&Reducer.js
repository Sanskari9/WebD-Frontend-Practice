let arr = [23,34,56];

arr.forEach((value,index,Array)=>{
    // console.log(value,index,Array);
})

//Map
let a = arr.map((value,index,Array)=>{
    // console.log(value,index,Array)
    return value+1;
})
// console.log(a);

//Reducers
let arr1 = [2,3,4,5,1,2];
let newArr1 = arr1.reduce((item1,item2)=>{
    return item1+item2;
})
console.log(newArr1);