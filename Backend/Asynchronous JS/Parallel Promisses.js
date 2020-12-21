const p1 = new Promise ((resolve) => {
  setTimeout(() =>{
    console.log("Async operation 1...");
    resolve(1);
  }, 2000);
});

const p2 = new Promise ((resolve) => {
  setTimeout(() =>{
    console.log("Async operation 2...");
    resolve(2);
  }, 2000);
});

Promise.all([p1, p2])
  .then(result => console.log(result))
  .catch(err => console.log("Error", err.message));
//NOT real concurrency
//if any of the promisses fails, the final promisse returned is considered rejected
//if needing something as sson as the first operation completes use Promisse.race()
//