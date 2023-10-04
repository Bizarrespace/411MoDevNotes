

async function i_want_a_promise() {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.6) {
      reject('not today sucker1')
    }
    setTimeout(() => {
        // this resolves the promise
        resolve("slay1.");
    }, 1000);
  }); 
}


async function i_want_a_promise2(firstOutput) {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.6) {
      reject('not today sucker2' + firstOutput)
    }
    setTimeout(() => {
        // this resolves the promise
        resolve("slay2." + firstOutput);
    }, 1000);
  }); 
}


(async () => {
  try {
    const result2 = await i_want_a_promise()
      .then(res => i_want_a_promise2(res));

    console.log(result2)
  } catch (err) { 
     console.log(err)
  }
})();



