
//CUSTOM MIDDLEWARE FUNCTION

function log (req, res, next) {
    console.log("Logging...");
    next(); //pass control to the next middlewarte function, whithout this the process hangs in there 
};

module.exports = log;