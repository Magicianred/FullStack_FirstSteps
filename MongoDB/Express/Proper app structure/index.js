
//CONFIGURATION LOADING
const config = require("config"); //config.get("name") config.get("name") config.get("host.mail") 

//DEBUGGER: can be set on CLI to on or off, DEBUG=app:startup,app:db  or DEBUG=app:* for all
const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");

const express = require ("express");
const app = express(); //gets express http methods like get, post, put and delete
// app.get() 
// app.post() 
// app.put() 
// app.delete()
const morgan = require("morgan"); //middleware
const helmet = require("helmet"); //middleware
const logger = require("./middleware/logger"); //middleware
const courses = require("./routes/courses");
const home = require("./routes/home");

// process.env.NODE_ENV returns the environment set to the application
console.log(`NODE_ENV: ${process.env.NODE_ENV}`); //if not set returns undefined
//To set environmet type on command line "set NODE_ENV=production/development/staging"
app.get("env"); // returns development environment by default

app.use(express.json()); //adding piece of middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());
app.use("/api/courses", courses); //for any routes that starts with /api/courses, use this router
app.use("/", home);

if (app.get("env") === "development") {
    app.use(morgan("tiny"));
    startupDebugger("Morgan enabled...");
}
//DB work...
dbDebugger("Connected to the database");

app.use(logger);

//PORT variable to easily deploy to another host
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));