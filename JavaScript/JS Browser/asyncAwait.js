async function Harry(){
    let dehliWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 deg")
        },1000)
    })
    let bangloreWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("21 deg")
        },2000)
    })
    // dehliWeather.then(alert);
    // bangloreWeather.then(alert);

    let delhiW = await dehliWeather;
    let bangloreW = await bangloreWeather;
    return [delhiW,bangloreW]
}

console.log("Welcome to weather Control Room");
let a = Harry();
console.log(a);
