//Named Functions! Replacing each anonymous callback function with a named one

console.log("Before");
getUser(1, getRepositories);    
console.log("After");

function getRepositories(user){
    getRepositories(user.gitHubUsername, getCommits);
}

function getCommits (repos) {
    console.log(repo, displayCommits);
}

function displayCommits (commits) {
    console.log(commits);
}

// CALLBACKS return the result when the async operation is ready

function getUser(id, callback) {
    setTimeout(() => {
        console.log("Reading a user from a database...");
        callback({ id: id, gitHubUsername: "Akemi"});
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log("Calling GitHub API...");
        callback(["repo1", "repo2", "repo3", "repo4"]);
    }, 2000);
}

function getCommits(repo, callback) {
    setTimeout(() => {
        console.log("Calling GitHub API...");
        callback(["commit"]);
    }, 2000);
}