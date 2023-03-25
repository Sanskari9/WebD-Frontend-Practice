let a = {
    name: "Santosh",
    age: 22
}
let p = {
    run: ()=>{
        alert("run")
    }
}
a.__proto__ = p
a.run();
console.log(a);
