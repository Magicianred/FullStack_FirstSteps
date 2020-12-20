const express = require ("express");
const app = express(); //gets express http methods like get, post, put and delete
// app.get() 
// app.post() 
// app.put() 
// app.delete()

app.use(express.json()); //adding piece of middleware

const courses =[
    { id: 1, name: "course1"},
    { id: 2, name: "course2"},
    { id: 3, name: "course3"},
];

app.get("/", (req, res) => { //define route ("/") and its route handler (req, res)
    res.send("Hello World!");
});

app.get("/api/courses/", (req, res) => {
    res.send( courses );
});

//setting with parameter ":id"
app.get("/api/courses/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send("The course with the given id was not found.")
    res.send(course);
});

app.get("/api/posts/:year/:month", (req, res) => {
    res.send(req.params);//essential requires values + query parameters for optionals
});

// POST
app.post("/api/courses", (req, res) => {
    const course = {
        id: "assigned by database",
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

//PORT variable to easily deploy to another host
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));