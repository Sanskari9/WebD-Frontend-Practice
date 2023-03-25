const createTodo = async (todo) =>{

let options = {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(todo),
}

let p = await fetch('https://jsonplaceholder.typicode.com/posts',options)
    let response = await p.json();
    return response
}

const getTodo = async (id)=>{
    let p2 = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let response = await p2.json();
    return response
}
const mainFunc = async ()=>{
    let todo = {
        title: 'Santosh2',
        body: 'Kushwah2',
        userId: 110
    }
    let todor = await createTodo(todo);
    console.log(await getTodo(5))
    console.log(todor)
}
mainFunc();