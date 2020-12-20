const express = require ("express");
const app = express(); //gets express http methods like get, post, put and delete
// app.get() 
// app.post() 
// app.put() 
// app.delete()

app.get("/", (req, res) => { //define route ("/") and its route handler (req, res)
    res.send("Hello World!");
});

app.get("/api/courses/", (req, res) => {
    res.send( "Database course objects" );
});

//setting with parameter ":id"
app.get("/api/courses/:id", (req, res) => {
    res.send(req.params.id);//to read the parameter
});

app.get("/api/posts/:year/:month", (req, res) => {
    res.send(req.params);//essential requires values + query parameters for optionals
});


//PORT variable to easily deploy to another host
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));