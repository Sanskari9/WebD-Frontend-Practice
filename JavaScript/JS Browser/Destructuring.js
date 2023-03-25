// let arr = [3,5,8,9,12,13]
// let [a,,,...rest] = arr
// console.log(a,rest)

// let {c,d} = {c:1,d:2};
// console.log(c,d)

let arr = [1,2,3];
let obj1 = {...arr};
console.log(obj1);

function sum(v1,v2,v3){
    return v1+v2+v3;
}
console.log(sum(...arr))

let obj2 = {
    name: "Santosh",
    age: "xyz",
    address: "xyz"
}

console.log({...obj2, name:"john"})