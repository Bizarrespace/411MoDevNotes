

// given...

function collectData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('collecting data...');
            resolve(100);
        }, 1000);
    });
}

function sendData(recordsCount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('sending data...');
          resolve(recordsCount);
        }, 1000);
    });
}

function done(result) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("We're done!");
      resolve();
    }, 1000);
});

}
(async function() {
  collectData()
      .then(records => sendData(records))
      .then(sentRecords => done(sentRecords))
      .catch(error => console.error('Error:', error.message));
})();


