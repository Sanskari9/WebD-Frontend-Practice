let p1 = new Promise((resolve,reject)=>{
    console.log("promises is pending")
    setTimeout(()=>{
        // console.log("I am Promise and I am resolved")
        resolve(true);
    },5000)
})
console.log(p1);

let p2 = new Promise((resolve,reject)=>{
    console.log("promises is pending")
    setTimeout(()=>{
        // console.log("I am Promise and I am rejected")
        reject(new Error("I am an ERRor"));
    },5000)
})
console.log(p2);

p1.then((value)=>{
    console.log(value);
})

p2.catch((error)=>{
    console.log("Got Some error on p2", error)
})