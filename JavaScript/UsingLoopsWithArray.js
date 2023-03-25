let a = [2,4,6,8,10];

for(let i =0;i<a.length;i++){
    console.log(a[i]);
}

//for Each loop
a.forEach((element)=>{
    console.log(element*element);
})

//Array From
let name = "harry";
let arr = Array.from(name);
console.log(arr);

//For of

for(let i of a){
    console.log(i);
}

//for in
for(let i in a){
    console.log(i);
}