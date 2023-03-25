let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(new Error("Error"))
    },1000)
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value 2")
    },2000)
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value 3")
    },3000)
})

// p1.then((value)=>{
//     console.log(value)
// })
// p2.then((value)=>{
//     console.log(value)
// })
// p3.then((value)=>{
//     console.log(value)
// })

let promises_all = Promise.allSettled([p1,p2,p3]);

promises_all.then((value)=>{
    console.log(value);
})