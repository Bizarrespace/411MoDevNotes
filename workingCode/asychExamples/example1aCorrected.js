const promise = new Promise((resolve, reject) => {
    if (Math.random() < .6) {
        reject("Failed");
    }
    setTimeout(() => {
        resolve("Success");
    }, 3000);
});

console.log(promise);

promise
    .then((returnedValue) => { console.log(returnedValue);}) //This is how you get the returned value from the promise 
    .catch((err) => {console.log(err);})
; 
// We are using chaining in this, using the promise's .catch component to get the error

//Summary resolve and reject them, .then to get result, .catch to get the rejected