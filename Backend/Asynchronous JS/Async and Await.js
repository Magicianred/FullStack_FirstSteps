//Promise based approach

getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log("Commits", commits))
    .catch(err => console.log("Error", err.message));

//Async and Await approach
//async code that looks synchronous
async function displayCommits() {
    try {
		const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
		console.log(commits);
	} 
	catch (err) {
		console.log("Error", err.message);
	}
}
displayCommits();
 