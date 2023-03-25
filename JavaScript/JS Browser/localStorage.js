let key = prompt("Enter the key do you want....")
let value = prompt("Enter the value do you want....")
localStorage.setItem(key,value)
console.log(`the value at ${key} is ${localStorage.getItem(key)}`)