let p = new Promise((resolve,reject)=>{
    alert("hey I am Promises");
    setTimeout(()=>{
        resolve(1);
    },3000)
})

p.then(()=>{
    console.log("Hurray");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(4);
        },3000)
    })
}).then((value)=>{
    console.log(value);
})
p.then(()=>{
    console.log("Congratulations this promise is now resolved");
})