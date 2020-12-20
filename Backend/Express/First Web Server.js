const express = require ("express");
const app = express(); //gets express http methods like get, post, put and delete
// app.get() 
// app.post() 
// app.put() 
// app.delete()

app.get("/", (req, res) => { //define route ("/") and its route handler (req, res)
    res.send("Hello World!");
});

app.get("/api/courses", (req, res) => {
    res.send( "Database course objects" );
});

app.listen(3000, () => console.log("Listening on port 3000"));