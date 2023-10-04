
// reminder: code to handle delay
// setTimeout(() => {
//   // this resolves the promise
//   resolve({ok:"slay.", delay});
// }, delay);


// returns how many records were collected. Error sometimes.
function collect_data() {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.1) {
      reject(new Error ('data collection failed'));
    }
    const delay = Math.floor(Math.random() * 4);
    setTimeout(() => {
      console.log("Collect data");
      resolve(Math.floor(Math.random() * 1024));
    }, delay)
  });
}

// return number successfully processed, or error
function process_records(number_to_process) {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.07) {
      reject(new Error ('processing failed'));
    } else if (Math.random() < 0.15) {
      resolve(number_to_process - 1)
    }
    const delay = Math.floor(Math.random() * 3);
    setTimeout(() => {
      console.log("Process data");
      resolve(number_to_process);
    }, delay)
  });
}

function assemble_report(number_processed) {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.01) {
      reject(new Error ("report assembly failed"));
    }
    const delay = Math.floor(Math.random() * 2);
    setTimeout(() => {
      console.log("Assembled report " + number_processed);
      resolve(number_processed);
    }, delay)
  });
}

/*
* Main program
*/

// NOTE this assumes everything goes smoothly. 
// But EACH STEP can fail.
// It also assumes that the functions are synchronous.
//
// Change this into a promise chain, and handle errors (output where it went wrong).

// const collected_records = collect_data();
// const processed_records = process_records(collected_records);
// const report = assemble_report(processed_records);

// if (report == 'assembled report') {
//   console.log('success');
// } else {
//   console.log('something went wrong');
// }

(async function() {
  collect_data()
    .then(number => process_records(number))
    .then(processed => assemble_report(processed))
    .catch(err => console.error('Error:', err.message));
})();