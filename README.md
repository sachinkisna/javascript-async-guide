# JavaScript Async Guide: Callbacks, Promises, and Async/Await

Welcome to a beginner-friendly guide on mastering asynchronous JavaScript! This repository explains **Callbacks**, **Promises**, and **Async/Await** with simple examples and a real-world use case. Perfect for developers, students, or clients seeking JavaScript expertise.

## Why This Guide?
- Learn how to handle async operations in JavaScript.
- Understand the evolution from Callbacks to Async/Await.
- Boost your skills with practical, real-life examples.

## Table of Contents
1. [Callbacks](#callbacks)
2. [Promises](#promises)
3. [Async/Await](#asyncawait)
4. [Real-World Use Case](#real-world-use-case)
5. [How to Use This Repo](#how-to-use)

## Callbacks
A callback is a function passed to another function to run after a task completes. Think of it as a "call me back when you're done" instruction.

```javascript
function cookFood(dish, callback) {
  console.log(`Cooking ${dish}...`);
  setTimeout(() => callback(`${dish} is ready!`), 2000);
}
cookFood("Pizza", (result) => console.log(result));
```
## Promises
Promises handle async tasks with a cleaner syntax, offering .then() for success and .catch() for errors.

```javascript
function cookFood(dish) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${dish} is ready!`), 2000);
  });
}
cookFood("Pasta").then((result) => console.log(result));
```
## Async/Await
Async/Await makes async code look synchronous, improving readability.

```javascript
async function prepareMeal() {
  const result = await cookFood("Soup");
  console.log(result);
}
prepareMeal();
```
## Real-World Use Case
Imagine building a food delivery app:

Check if the restaurant is open (Callback).
Place the order (Promise).
Notify delivery (Async/Await).
See the  in the examples/ folder!

## How to Use
Clone this repo: git clone https://github.com/yourusername/javascript-async-guide.git
Open index.js in the examples/ folder.
Run it with Node.js: node index.js

## Want to Collaborate?
Feel free to fork, star, or contribute! Contact me at hello@sachinrout.com for your projects or questions.
