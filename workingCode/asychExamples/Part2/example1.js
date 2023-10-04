

async function i_want_a_promise() {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.6) {
      reject('not today sucker')
    }
    setTimeout(() => {
      // this resolves the promise
      resolve("slay.");
    }, 1000);
  }); 
}

console.log('before');

i_want_a_promise()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log('after'));



 