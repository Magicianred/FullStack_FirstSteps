//PROMISSE: Holds the eventual result of an async operation, "promissing" the result of the async operation wheter it being a result or error
//STATES
//Pending - will kick a async operation
//Fulfilled/resolved - async operation completed successfully, resulting in a value
//Rejected - error

//Anywhere you have an async function that takes a callback, you should modify the function to return a promisse
const p = new Promise((resolve, reject) =>{
    setTimeout (() =>{
        resolve(1);
        reject(new Error("message")); 
    }, 2000);
});

p
    .then(result => console.log("Result", result))
    .catch(err => console.log("Error", err.message));

// REPLACING CALLBACKS WITH PROMISSES

console.log("Before");
getUser(1, (user) => {
    console.log("User", user);//callback function
    getRepositories(user.gitHubUsername, (repos) => {
        console.log("Repos", repos);
        getCommits(repo, (commits) => {
            //CALLBACK HELL
        });
    });
});
console.log("After");

// CALLBACKS return the result when the async operation is ready

function getUser(id) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
            console.log("Reading a user from a database...");
            resolve({ id: id, gitHubUsername: "Akemi"});
        }, 2000); 
    });    
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Calling GitHub API...");
            resolve(["repo1", "repo2", "repo3", "repo4"]);
        }, 2000);
     });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            console.log("Calling GitHub API...");
            resolve(["commit"]);
        }, 2000);
    });    
}

//CONSUMING PROMISSES by chaining them
//Promise based aproach

getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log("Commits", commits))
    .catch(err => console.log("Error", err.message));//will handle errors that comes from any of the operations