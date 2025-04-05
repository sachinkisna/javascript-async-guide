// Callback
function checkRestaurant(callback) {
  setTimeout(() => callback("Restaurant is open"), 1000);
}

// Promise
function placeOrder() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Order placed"), 1000);
  });
}

// Async/Await
async function deliverOrder() {
  const status = await placeOrder();
  console.log(status);
  console.log("Food delivered!");
}

checkRestaurant((result) => {
  console.log(result);
  deliverOrder();
});
