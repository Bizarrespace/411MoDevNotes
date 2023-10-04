

async function i_want_a_promise(delay) {
  if ( ! delay) {
    delay = Math.floor(Math.random() * 4);
  }
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.6) {
      reject({error:'not today sucker',delay})
    }
    setTimeout(() => {
        // this resolves the promise
        resolve({ok:"slay.", delay});
    }, delay);
  }); 
}

console.log('before');

promises = Array.from({length:10}, i_want_a_promise);

// console.log(promises);

//Used for if you want to check a bunch of apis for example, and if any one of them fails than you get an error
//and it bottoms out instantly
(async () => {
  try {
    const result = await Promise.all(promises);
    console.log(result)
  } catch (err) { 
     console.log(err)
  }
})();

console.log('after');


