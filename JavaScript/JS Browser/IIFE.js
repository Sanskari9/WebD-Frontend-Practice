let a = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(456);
        },4000)
    })
}

(async ()=>{
    let c = await a();
    console.log(c);
    let d = await a();
    console.log(d);
    let e = await a();
    console.log(e);
})()