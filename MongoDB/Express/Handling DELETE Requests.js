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
    //INPUT VALIDATION
    if (!req.body.name || req.body.name.length < 3) { //too simple validation logic
        //400 bad request: no name or less than 3
        res.status(400).send("Name is requires and should be minimum of 3 characters");
        return;
    }
    //INSTALL JOI NPM PACKAGE TO MAKE MORE COMPLEX INPUT VALIDATION
    const result = validateCourse(req.body);
    //OR const { error } = validateCourse(req.body);
    if (result.error) { // (error)
        res.status(400).send(result.error);
        return;
    }

    const course = {
        id: "assigned by database",
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

//PUT 
app.put("/api/courses/:id", (req, res) => {
    //Look up the course
    //If not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send("The course with the given id was not found.")
    
    //Validate (make it a function for refactoring)
    //If invalid, return 400 - Bad Request
    const result = validateCourse(req.body);
    //OR const { error } = validateCourse(req.body);
    if (result.error) { // (error)
        res.status(400).send(result.error);
        return;
    }
    
    //Update course
    course.name = req.body.name;
    //Return the updated course
    res.send(course);

});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}

app.delete("/api/courses/:id", (req, res) => {
    //Look up the course
    //If not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send("The course with the given id was not found.");

    //Delete 
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    //Return the same course
    res.send(course);
});

//PORT variable to easily deploy to another host
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));