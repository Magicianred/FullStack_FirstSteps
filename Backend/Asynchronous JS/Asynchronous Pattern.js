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