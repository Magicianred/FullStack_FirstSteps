const express = require('express');
const router = express.Router();

const courses =[
    { id: 1, name: "course1"},
    { id: 2, name: "course2"},
    { id: 3, name: "course3"},
];

router.get("/", (req, res) => {
    res.send( courses );
});

//setting with parameter ":id"
router.get("/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send("The course with the given id was not found.")
    res.send(course);
});


// POST
router.post("/", (req, res) => {
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
router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
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

module.exports = router;