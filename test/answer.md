# Javascript Test

<small>Just a quick test to test your javascript understanding.</small>

---

## 1) What is ES6?

```bash
//Write your answer here:
ES6 is the newer version of JavaScript that was introduced in 2015.
```

## 2) Name 3 examples of ES6 features

```bash
//Write your answer here:
・let and const keywords
・Arrow Functions
・Default Parameters
```

## 3) What is the difference between let and const?

```bash
//Write your answer here:
let:Can be reassigned.once declared, variables can be updated.
const:Cannot be reassigned.
```

## 4) How do you access object values? Give 3 examples

```bash
//Write your answer here:
1.Dot property accessor: object.property
2.Square brackets property accessor: object['property']
3.Object destructuring: const { property } = object
```

## 5) What does setInterval and setTimeout do?

```bash
//Write your answer here:
setTimeout: run a function once after the specified time has elapsed.
setInterval: run a function repeatedly　at defined time intervals
```

## 6) What are promises?

```bash
//Write your answer here:
A Promise is an object representing the eventual completion or failure of an asynchronous operation.
```

## 7) Convert this async function to async/await

```bash
getQuote()
    .then((quote) => {
        console.log(quote)
    })
    .catch((error) => {
        console.error(error)
    })


//answer
async () => {
const quote = await getQuote()
console.log(quote)
}

```

## 8) Convert this code to arrow function

```bash
function greeting(firstname, lastname){
    return `Hi ${firstname} ${lastname}`;
}


//answer
let greeting = (firstname, lastname) => {
return `Hi ${firstname} ${lastname}`;
}


```

## 9) Explain what a callback function is

```bash
//Write your answer here:
It is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action
```

## 10) What does the functions pop and push do to an array?

```bash
//Write your answer here:
The pop() removes an item from the end of an array.
The returning value:the item that is removed from the array.

the push()  adds an item to the end of an array.
The returning value:the number of elements in the array after the new element has been added.
```

## 11) What is the expected answer to this code?

```bash
let string1 = "";
let object1 = {a:1, b:2, c:3};

for(const property1 in object1){
    string1 += object1[property1]
}

console.log(string1);


//answer
123


```

## 12) What data type would Array.map() and Array.filter() return?

```bash
//Write your answer here:
return a new array
```

## 13) What data type would Array.includes() and Array.some() return?

```bash
//Write your answer here:
return boolean whether  an array includes a certain value among its entries.
```

## 14) Write down the 4 main methods of rest api

```bash
//Write your answer here:
GET, POST, PUT,　DELETE
```

## 15) What is the difference between JSON and a JavaScript object?

```bash
//Write your answer here:
JSON is a "data format" based on JavaScript object notation.
It can be used and created by other languages and can not contain functions

JavaScript object is a type value of the form object and it can contain functions.

```
