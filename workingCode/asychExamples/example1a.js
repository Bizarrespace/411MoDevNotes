// Math.random() returns a random number between 0 and 1.

// Modify this code so that the Promise 
// resolves 60% of the time and rejects 40% of the time.
// (actual messages don't matter)






// Note that we log "pending" because it's still pending!...

for (let i = 0; i< 10; i++) {
  const randomNum = Math.random()
  const promise = new Promise((resolve, reject) => {
    if (randomNum < .40) {
      reject("Failed");
    } else {
      resolve("Success");
    }
});
  promise.catch((error) => {
  });
  console.log(promise);
}

// now we're going to wait long enough 
// that it has completed




// There is no way in THIS code to get that value
//  ("Success!) out of the promise